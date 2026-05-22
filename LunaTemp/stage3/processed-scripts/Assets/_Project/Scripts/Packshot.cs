using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace Project
{
    public class Packshot : MonoBehaviour
    {
        [SerializeField] private CanvasGroup _canvasGroup;
        [SerializeField] private Button _playNow;

        private void OnEnable()
        {
            _playNow.onClick.AddListener(OnPlayNowClick);
        }

        private void OnDisable()
        {
            _playNow.onClick.RemoveListener(OnPlayNowClick);
        }

        private void OnDestroy()
        {
            _canvasGroup.DOKill();
        }

        public void Show()
        {
            Luna.Unity.LifeCycle.GameEnded();
            gameObject.SetActive(true);
            _canvasGroup.DOFade(1, 1f);
        }

        private void OnPlayNowClick()
        {
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}