#if UNITY_EDITOR
using System;
using UnityEngine;
using UnityEditor;

namespace Project
{
    public class HexTileGenerator : MonoBehaviour
    {
        public HexTile TilePrefab;
        public TileGeneratorEntry[] Entries;
    }

    [Serializable]
    public struct TileGeneratorEntry
    {
        public int TilesCount;
        public int ColorIndex;
    }
    
    [CustomEditor(typeof(HexTileGenerator))]
    [CanEditMultipleObjects]
    public class HexTileGeneratorEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();

            HexTileGenerator generator = (HexTileGenerator)target;

            if (GUILayout.Button("Generate Tiles"))
            {
                Generate(generator);
            }
        }

        private void Generate(HexTileGenerator generator)
        {
            var validator = FindObjectOfType<HexValidator>();
            Transform parent = generator.transform;
            Hex hex = generator.GetComponent<Hex>();

            foreach (var tile in hex.Tiles)
                DestroyImmediate(tile.gameObject);
            hex.Tiles.Clear();

            foreach (var entry in generator.Entries)
            {
                for (int i = 0; i < entry.TilesCount; i++)
                {
                    HexTile tile = (HexTile)PrefabUtility.InstantiatePrefab(generator.TilePrefab, parent);
                    tile.ColorIndex = entry.ColorIndex;
                    validator.Validate(tile);
                    hex.Tiles.Add(tile);
                }
            }
            
            validator.Validate(hex);
        }
    }
}
#endif