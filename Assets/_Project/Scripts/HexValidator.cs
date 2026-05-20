#if UNITY_EDITOR
using UnityEngine;

namespace Project
{
    public class HexValidator : MonoBehaviour
    {
        [SerializeField] private Material[] _materialColors;
        [SerializeField] private float _hexStep;
        [SerializeField] private float _offset = 0.06f;

        private void OnValidate()
        {
            var hexes = FindObjectsByType<Hex>(FindObjectsSortMode.None);
            foreach (var hex in hexes)
                Validate(hex);
        }

        [ContextMenu("Fix References")]
        public void FixReferences()
        {
            var hexes = FindObjectsByType<Hex>(FindObjectsSortMode.None);
            foreach (var hex in hexes)
            {
                var hexTransform = hex.transform;
                if (hexTransform.childCount <= 2)
                    continue;

                hex.Tiles.Clear();
                for (int i = 2; i < hexTransform.childCount; i++)
                {
                    var tile = hexTransform.GetChild(i).GetComponent<HexTile>();
                    hex.Tiles.Add(tile);
                }
                
                Validate(hex);
            }
        }
        
        public void Validate(Hex hex)
        {
            for (int i = 0; i < hex.Tiles.Count; i++)
            {
                if (hex.Tiles[i].transform.parent != hex.transform)
                    hex.Tiles[i].transform.SetParent(hex.transform);
                hex.Tiles[i].transform.SetAsLastSibling();
                hex.Tiles[i].transform.localPosition = Vector3.up * (_offset + _hexStep + _hexStep * i);
            }
            UnityEditor.EditorUtility.SetDirty(hex);
        }
        
        public void Validate(HexTile tile)
        {
            if (tile.ColorIndex < _materialColors.Length && tile.ColorIndex >= 0)
                tile.GetComponent<MeshRenderer>().sharedMaterial = _materialColors[tile.ColorIndex];
        }
    }
}
#endif