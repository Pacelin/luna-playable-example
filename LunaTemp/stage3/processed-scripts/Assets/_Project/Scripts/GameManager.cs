using System;
using UnityEngine;

namespace Project
{
    public class GameManager : MonoBehaviour
    {
        [SerializeField] private TutorialManager _tutorialManager;
        [SerializeField] private Packshot _packshot;
        [SerializeField] private float _firstTutorialDelay;
        [SerializeField] private float _repeatedTutorialDelay;
        [SerializeField] private DraggableHex[] _draggableHexes;
        
        private void Awake() => _tutorialManager.StartTutorial(_firstTutorialDelay);
        public void OnDropMiss() => _tutorialManager.StartTutorial(_repeatedTutorialDelay);
        public void OnDropCorrect()
        {
            foreach (var draggableHex in _draggableHexes)
                Destroy(draggableHex);
        }

        public void OnDrag()
        {
            _tutorialManager.StopTutorial();
        }

        public void OnCollapseCompleted()
        {
            _packshot.Show();
        }
    }
}