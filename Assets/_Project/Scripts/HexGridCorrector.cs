#if UNITY_EDITOR
using UnityEngine;

namespace Project
{
    public class HexGridCorrector : MonoBehaviour
    {
        [SerializeField] private Hex _center;
        [SerializeField] private Hex[] _other;
        [SerializeField] private float _change;

        [ContextMenu("Apply Change")]
        private void ApplyChange()
        {
            foreach (var hex in _other)
            {
                var direction = (hex.transform.position - _center.transform.position).normalized;
                hex.transform.position += direction * _change;
            }
        }
    }
}
#endif