#if UNITY_EDITOR
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace Project
{
    public class HexGridGenerator : MonoBehaviour
    {
        public int width = 5;
        public int height = 5;
        public float hexRadius = 1f;
        public Transform parent;
        public GameObject hexPrefab;
    }

    [CustomEditor(typeof(HexGridGenerator))]
    public class HexGridGeneratorEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            DrawDefaultInspector();

            HexGridGenerator generator = (HexGridGenerator)target;

            if (GUILayout.Button("Generate Hex Grid"))
            {
                Generate(generator);
            }
        }

        private void Generate(HexGridGenerator generator)
        {
            Transform parent = generator.parent != null ? generator.parent : generator.transform;
            for (int i = parent.childCount - 1; i >= 0; i--)
                Object.DestroyImmediate(parent.GetChild(i).gameObject);

            var hexGrid = new List<Hex>();

            float width = generator.hexRadius * 2f;
            float height = Mathf.Sqrt(3) * generator.hexRadius;
            float xOffset = width * 0.75f;
            float zOffset = height;

            for (int x = 0; x < generator.width; x++)
            {
                for (int y = 0; y < generator.height; y++)
                {
                    float xPos = x * xOffset;
                    float zPos = y * zOffset + ((x % 2 == 0) ? 0f : zOffset / 2f);
                    Vector3 pos = new Vector3(xPos, 0, zPos);

                    GameObject hexGO = generator.hexPrefab != null
                        ? (GameObject)PrefabUtility.InstantiatePrefab(generator.hexPrefab, parent)
                        : new GameObject($"Hex_{x}_{y}");
                    hexGO.transform.position = pos;
                    hexGO.transform.parent = parent;

                    var hex = hexGO.GetComponent<Hex>() ?? hexGO.AddComponent<Hex>();
                    hex.Neighbours = new List<Hex>();
                    hexGrid.Add(hex);
                }
            }

            foreach (var hex in hexGrid)
            {
                foreach (var otherHex in hexGrid)
                {
                    if (hex == otherHex)
                        continue;
                    var distance = Vector3.Distance(hex.transform.position, otherHex.transform.position);
                    if (distance <= generator.hexRadius * 2.1f)
                        hex.Neighbours.Add(otherHex);
                }
            }
        }
    }
}
#endif