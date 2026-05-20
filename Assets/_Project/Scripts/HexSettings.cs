using UnityEngine;

namespace Project
{
    [CreateAssetMenu(menuName = "Hex Settings")]
    public class HexSettings : ScriptableObject
    {
        public float PositionStep;
        public float PositionOffset;
    }
}
