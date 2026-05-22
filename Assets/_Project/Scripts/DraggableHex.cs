using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Project
{
    public class DraggableHex : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
    {
        [SerializeField] private GameManager _gameManager;
        
        public float DragHeight;
        public List<HexTile> Tiles;
        public LayerMask RaycastLayerMask;
        public Camera Camera;
        public float DragSmoothSpeed = 15f;

        public float ReturnDuration;
        
        private Vector3 _originalPosition;
        private bool _isDragging;
        private Vector3 _dragTargetPosition;

        private void OnDestroy()
        {
            DOTween.Kill(this);
        }

        public void OnBeginDrag(PointerEventData eventData)
        {
            _isDragging = true;
            _originalPosition = transform.position;

            _gameManager.OnDrag();
            UpdateDragTargetPosition(eventData);
        }

        public void OnDrag(PointerEventData eventData)
        {
            UpdateDragTargetPosition(eventData);
        }

        public void OnEndDrag(PointerEventData eventData)
        {
            _isDragging = false;
            Ray ray = Camera.ScreenPointToRay(eventData.position);
            if (Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity, RaycastLayerMask))
            {
                HexDropTarget dropTarget = hit.collider.GetComponent<HexDropTarget>();
                if (dropTarget != null)
                {
                    dropTarget.OnDrop(this);
                    _gameManager.OnDropCorrect();
                    return;
                }
            }
    
            transform.DOMove(_originalPosition, ReturnDuration)
                .SetTarget(this);
            _gameManager.OnDropMiss();
        }
        
        private void Update()
        {
            if (!_isDragging) return;
    
            transform.position = Vector3.Lerp(transform.position, _dragTargetPosition, 
                DragSmoothSpeed * Time.deltaTime);
        }

        private void UpdateDragTargetPosition(PointerEventData eventData)
        {
            Ray ray = Camera.ScreenPointToRay(eventData.position);
            Plane dragPlane = new Plane(Vector3.up, transform.position);
            
            if (dragPlane.Raycast(ray, out float enter))
            {
                Vector3 hitPoint = ray.GetPoint(enter);
                _dragTargetPosition = new Vector3(hitPoint.x, _originalPosition.y + DragHeight, hitPoint.z);
            }
        }
    }
}