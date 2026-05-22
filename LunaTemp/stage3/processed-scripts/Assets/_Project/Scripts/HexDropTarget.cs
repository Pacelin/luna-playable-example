using DG.Tweening;
using UnityEngine;

namespace Project
{
    public class HexDropTarget : MonoBehaviour
    {
        [SerializeField] private HexManager _hexManager;
        [SerializeField] private Hex _placeOnHex;
        [SerializeField] private float _moveDuration;
        [SerializeField] private float _fallDuration;
        [SerializeField] private float _hexActivateDelay;
        
        private void OnDestroy()
        {
            DOTween.Kill(this);
        }

        public void OnDrop(DraggableHex draggableHex)
        {
            PlaceAnimation(draggableHex.transform);
            _placeOnHex.Tiles.AddRange(draggableHex.Tiles);
        }

        private void PlaceAnimation(Transform hexesParent)
        {
            var targetPosition = _placeOnHex.transform.position;
            var targetXZ = new Vector3(targetPosition.x, hexesParent.position.y, targetPosition.z);
            DOTween.Sequence(this)
                .Append(hexesParent.DOMove(targetXZ, _moveDuration))
                .Append(hexesParent.DOMove(targetPosition, _fallDuration))
                .AppendInterval(_hexActivateDelay)
                .AppendCallback(() =>
                {
                    _hexManager.StartHexesTransitioning(_placeOnHex);
                    Destroy(this);
                });
        }
    }
}