using System.Collections;
using System.Linq;
using DG.Tweening;
using UnityEngine;

namespace Project
{
    public class HexAnimationTest : MonoBehaviour
    {
        [SerializeField] private Hex _from;
        [SerializeField] private Hex _to;
        [SerializeField] private AnimationCurve _curve;
        [SerializeField] private float _duration;
        [SerializeField] private float _cooldown;
        [SerializeField] private float _jumpHeight;
        public float PositionStep;
        public float PositionOffset;

        private void OnDestroy()
        {
            DOTween.Kill(this);
        }

        public IEnumerator Start()
        {
            yield return new WaitForSeconds(2);

            var tileColor = _from.Tiles.Last().ColorIndex;
            while (_from.Tiles.Count > 0 &&
                   _from.Tiles[^1].ColorIndex == tileColor)
            {
                var tile = _from.Tiles[^1];
                var tileTransform = tile.transform;
                _from.Tiles.RemoveAt(_from.Tiles.Count - 1);
                _to.Tiles.Add(tile);

                var targetPosition = GetTargetPosition(_to, _to.Tiles.Count);
                var direction = (targetPosition - tileTransform.position).normalized;
                var rotateAxis = Vector3.Cross(direction, Vector3.up);
                var rotateQuaternion = Quaternion.AngleAxis(180, rotateAxis);
                var targetQuaternion = tileTransform.rotation * rotateQuaternion;
                
                tileTransform.DOJump(targetPosition, _jumpHeight, 1, _duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this);
                tileTransform.DORotateQuaternion(targetQuaternion, _duration)
                    .SetEase(Ease.Linear)
                    .SetTarget(this);

                yield return new WaitForSeconds(_cooldown);
            }
        }

        private Vector3 GetTargetPosition(Hex hex, int index)
        {
            var hexPosition = hex.transform.position;
            hexPosition.y = PositionOffset + PositionStep * (index + 1);
            return hexPosition;
        }
    }
}