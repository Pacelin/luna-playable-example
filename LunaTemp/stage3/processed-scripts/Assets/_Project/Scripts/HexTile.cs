using UnityEngine;

namespace Project
{
    public class HexTile : MonoBehaviour
    {
        public int ColorIndex;
        
        private void OnValidate()
        {
#if UNITY_EDITOR
            if (Application.isPlaying)
                return;

            var validator = FindObjectOfType<HexValidator>();
            if (validator)
                validator.Validate(this);
#endif
        }
    }
}