using System.Collections.Generic;
using UnityEngine;

namespace Project
{
    public class Hex : MonoBehaviour
    {
        public List<Hex> Neighbours;
        public List<HexTile> Tiles;

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
        
        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.green;
            foreach (var hex in Neighbours)
            {
                if (hex)
                {
                    var position = hex.transform.position;
                    Gizmos.DrawSphere(position, 0.2f);
                }
            }
        }
    }
}