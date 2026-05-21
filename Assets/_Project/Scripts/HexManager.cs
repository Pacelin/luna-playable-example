using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

namespace Project
{
    public class HexManager : MonoBehaviour
    {
        [SerializeField] private float _positionStep;
        [SerializeField] private float _positionOffset;
        [Header("Animation")]
        [SerializeField] private float _singleTileTransitionDuration;
        [SerializeField] private float _singleTileTransitionSuspend;
        [SerializeField] private float _tileStackTransitionDelay;
        [SerializeField] private float _timeMultiplierEveryStack = 0.7f; 
        [SerializeField] private float _tileJumpHeight;
        [Space]
        [SerializeField] private ParticleSystem _disappearParticles;

        [SerializeField] private Hex testHex;

        private void Update()
        {
            if (Input.GetKeyDown(KeyCode.Space))
                StartHexesTransitioning(testHex);
        }

        private void OnDestroy()
        {
            DOTween.Kill(this);
        }
        
        public void StartHexesTransitioning(Hex setupHex)
        {
            StartCoroutine(HexesTransitioning(setupHex));
        }

        private IEnumerator HexesTransitioning(Hex setupHex)
        {
            float timeMultiplier = 1;
            List<Hex> list = new List<Hex>() { setupHex };
            List<Hex> checkCompletion = new List<Hex>();
            
            while (list.Count > 0)
            {
                while (list.Count > 0)
                {
                    Hex hex = list[0];
                    if (hex.Tiles.Count == 0)
                    {
                        list.RemoveAt(0);
                        continue;
                    }
                    
                    bool changed = false;
                    
                    foreach (var neighbour in hex.Neighbours)
                    {
                        if (hex.Tiles.Count == 0)
                            break;
                        if (neighbour.Tiles.Count == 0)
                            continue;
                        if (list.Contains(neighbour))
                            continue;
                        if (hex.Tiles[^1].ColorIndex != neighbour.Tiles[^1].ColorIndex)
                            continue;

                        changed = true;
                        if (!list.Contains(neighbour))
                            list.Add(neighbour);
                        yield return HexTransition(hex, neighbour, timeMultiplier);
                    }

                    if (!changed)
                    {
                        list.RemoveAt(0);
                        checkCompletion.Add(hex);
                    }
                }

                yield return Disappear(checkCompletion, list, timeMultiplier);
                timeMultiplier *= _timeMultiplierEveryStack;
                checkCompletion.Clear();
            }
        }

        private IEnumerator HexTransition(Hex from, Hex to, float timeMultiplier)
        {
            var tileColor = from.Tiles.Last().ColorIndex;
            while (from.Tiles.Count > 0 &&
                   from.Tiles[^1].ColorIndex == tileColor)
            {
                var tile = from.Tiles[^1];
                var tileTransform = tile.transform;
                from.Tiles.RemoveAt(from.Tiles.Count - 1);
                to.Tiles.Add(tile);

                var targetPosition = GetTargetPosition(to, to.Tiles.Count);
                var direction = (targetPosition - tileTransform.position).normalized;
                var rotateAxis = Vector3.Cross(direction, Vector3.up);
                var rotateQuaternion = Quaternion.AngleAxis(180, rotateAxis);
                var targetQuaternion = tileTransform.rotation * rotateQuaternion;

                var duration = _singleTileTransitionDuration * timeMultiplier;
                tileTransform.DOJump(targetPosition, _tileJumpHeight, 1, duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this);
                tileTransform.DORotateQuaternion(targetQuaternion, duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this);

                yield return new WaitForSeconds(_singleTileTransitionSuspend * timeMultiplier);
            }

            yield return new WaitForSeconds(_tileStackTransitionDelay * timeMultiplier);
        }

        private IEnumerator Disappear(Hex hex, float timeMultiplier)
        {
            var tileColor = hex.Tiles[^1].ColorIndex;
            
            while (hex.Tiles.Count > 0 &&
                   hex.Tiles[^1].ColorIndex == tileColor)
            {
                var tile = hex.Tiles[^1];
                var tileTransform = tile.transform;
                hex.Tiles.RemoveAt(hex.Tiles.Count - 1);

                var duration = _singleTileTransitionDuration * timeMultiplier;
                tileTransform.DOScale(new Vector3(0, 1, 0), duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this)
                    .OnComplete(() => Destroy(tileTransform.gameObject));

                yield return new WaitForSeconds(_singleTileTransitionSuspend * timeMultiplier);
            }
        }
        
        private IEnumerator Disappear(List<Hex> check, List<Hex> changedList, float timeMultiplier)
        {
            bool IsCompleted(Hex hex)
            {
                if (hex.Tiles.Count == 0 || hex.Tiles.Count < 10)
                    return false;
                
                var tileColor = hex.Tiles[^1].ColorIndex;
                for (int i = 0; i < 10; i++)
                    if (hex.Tiles[^(i + 1)].ColorIndex != tileColor)
                        return false;
                return true;
            }

            var completedHexes = check.Where(IsCompleted).ToArray();
            changedList.AddRange(completedHexes);
            var coroutines = completedHexes.Select(hex => StartCoroutine(Disappear(hex, timeMultiplier)))
                .ToArray();

            // Wait All Coroutines
            foreach (var coroutine in coroutines)
                yield return coroutine;
            
            yield return new WaitForSeconds(_tileStackTransitionDelay * timeMultiplier);
        }
        
        private Vector3 GetTargetPosition(Hex hex, int index)
        {
            var hexPosition = hex.transform.position;
            hexPosition.y = _positionOffset + _positionStep * (index + 1);
            return hexPosition;
        }
    }
}