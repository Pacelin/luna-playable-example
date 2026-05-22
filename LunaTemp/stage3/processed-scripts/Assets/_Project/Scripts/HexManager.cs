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
        [SerializeField] private GameManager _gameManager;
        [SerializeField] private float _positionStep;
        [SerializeField] private float _positionOffset;
        [Header("Animation")]
        [SerializeField] private float _singleTileTransitionDuration;
        [SerializeField] private float _singleTileTransitionSuspend;
        [SerializeField] private float _tileStackTransitionDelay;
        [SerializeField] private float _timeMultiplierEveryStack = 0.7f; 
        [SerializeField] private float _tileJumpHeight;
        [Space]
        [SerializeField] private float _collapseDuration;
        [SerializeField] private float _collapseDelay;
        [SerializeField] private float _delayAfterCollapse;
        [Space]
        [SerializeField] private Color[] _particlesColors;
        [Space]
        [SerializeField] private Transform _cameraTransform;
        [SerializeField] private float _cameraShakeDuration = 0.5f;
        [SerializeField] private float _cameraShakePower;
        [SerializeField] private int _cameraShakeVibrato;

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
                        if (hex.Tiles[hex.Tiles.Count - 1].ColorIndex != neighbour.Tiles[neighbour.Tiles.Count - 1].ColorIndex)
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
            
            _gameManager.OnCollapseCompleted();
        }

        private IEnumerator HexTransition(Hex from, Hex to, float timeMultiplier)
        {
            if (from.Tiles.Count == 0)
                yield break;
    
            var tileColor = from.Tiles[from.Tiles.Count - 1].ColorIndex;
    
            while (from.Tiles.Count > 0 &&
                   from.Tiles[from.Tiles.Count - 1].ColorIndex == tileColor)
            {
                var tile = from.Tiles[from.Tiles.Count - 1];
                var tileTransform = tile.transform;
                from.Tiles.RemoveAt(from.Tiles.Count - 1);
                to.Tiles.Add(tile);
        
                var targetPosition = GetTargetPosition(to, to.Tiles.Count - 1);
                var duration = _singleTileTransitionDuration * timeMultiplier;
                tileTransform.forward = GetHorizontalDirection(tileTransform.position, targetPosition);
                var fromEuler = tileTransform.localRotation.eulerAngles;

                DOVirtual.Float(0, 180, duration, value =>
                {
                    tileTransform.localRotation = Quaternion.Euler(fromEuler.x + value, fromEuler.y, fromEuler.z);
                }).SetTarget(this).SetEase(Ease.Linear);
                
                tileTransform.DOJump(targetPosition, _tileJumpHeight, 1, duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this);
        
                yield return new WaitForSeconds(_singleTileTransitionSuspend * timeMultiplier);
            }
    
            yield return new WaitForSeconds(_tileStackTransitionDelay * timeMultiplier);
        }

        private Vector3 GetHorizontalDirection(Vector3 startPosition, Vector3 endPosition)
        {
            startPosition.y = 0;
            endPosition.y = 0;
            return (endPosition - startPosition).normalized;
        }
        
        private IEnumerator Disappear(Hex hex, float timeMultiplier, Action continuation)
        {
            if (hex.Tiles.Count == 0)
                yield break;
            
            var tileColor = hex.Tiles[hex.Tiles.Count - 1].ColorIndex;
            
            while (hex.Tiles.Count > 0 &&
                   hex.Tiles[hex.Tiles.Count - 1].ColorIndex == tileColor)
            {
                var tile = hex.Tiles[hex.Tiles.Count - 1];
                var tileTransform = tile.transform;
                hex.Tiles.RemoveAt(hex.Tiles.Count - 1);
                
                var duration = _collapseDuration * timeMultiplier;
                
                if (hex.Tiles.Count == 0 || hex.Tiles[hex.Tiles.Count - 1].ColorIndex != tileColor)
                {
                    tileTransform.DOScale(new Vector3(0, 1, 0), duration)
                        .SetEase(Ease.Linear)
                        .SetTarget(this)
                        .OnComplete(() =>
                        {
                            int safeColorIndex = Mathf.Clamp(tileColor, 0, _particlesColors.Length - 1);
                            hex.DisappearParticles.transform.position = GetTargetPosition(hex, hex.Tiles.Count);
                            var main = hex.DisappearParticles.main;
                            main.startColor = new ParticleSystem.MinMaxGradient(_particlesColors[safeColorIndex]);
                            main.simulationSpeed = 1f / timeMultiplier;
                            hex.DisappearParticles.Play();
                        })
                        .OnKill(() => Destroy(tileTransform.gameObject));
                }
                else
                {
                    tileTransform.DOScale(new Vector3(0, 1, 0), duration)
                        .SetEase(Ease.Linear)
                        .SetTarget(this)
                        .OnKill(() => Destroy(tileTransform.gameObject));
                    
                    yield return new WaitForSeconds(_collapseDelay * timeMultiplier);
                }
            }
            
            continuation?.Invoke();
        }
        
        private IEnumerator Disappear(List<Hex> check, List<Hex> changedList, float timeMultiplier)
        {
            var completedHexes = check.Where(IsCompleted).ToArray();
            changedList.AddRange(completedHexes);
            if (completedHexes.Length > 0)
            {
                var count = completedHexes.Length;
                foreach (var hex in completedHexes)
                    StartCoroutine(Disappear(hex, timeMultiplier, () => count--));

                yield return new WaitWhile(() => count > 0);
                
                _cameraTransform.DOShakePosition(
                        duration: _cameraShakeDuration, 
                        strength: _cameraShakePower, 
                        vibrato: _cameraShakeVibrato)
                    .SetTarget(this);
                yield return new WaitForSeconds(_delayAfterCollapse);
            }
            
            yield return new WaitForSeconds(_tileStackTransitionDelay * timeMultiplier);
        }

        private bool IsCompleted(Hex hex)
        {
            if (hex.Tiles.Count < 10)
                return false;
                
            var tileColor = hex.Tiles[hex.Tiles.Count - 1].ColorIndex;
            for (int i = 1; i < 10; i++)
                if (hex.Tiles[hex.Tiles.Count - 1 - i].ColorIndex != tileColor)
                    return false;
            return true;
        }
        
        private Vector3 GetTargetPosition(Hex hex, int index)
        {
            var hexPosition = hex.transform.position;
            hexPosition.y = _positionOffset + _positionStep * (index + 1);
            return hexPosition;
        }
    }
}