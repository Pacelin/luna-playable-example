using System.Collections;
using UnityEngine;

namespace Project
{
    public class TutorialManager : MonoBehaviour
    {
        [SerializeField] private Animation _animation;
        [SerializeField] private GameObject _hand;

        public void StartTutorial(float delay)
        {
            StopAllCoroutines();
            StartCoroutine(Tutorial(delay));
        }

        public void StopTutorial()
        {
            StopAllCoroutines();
            _animation.Stop();
            _hand.SetActive(false);
        }

        private IEnumerator Tutorial(float delay)
        {
            yield return new WaitForSeconds(delay);
            _hand.SetActive(true);
            _animation.Play();
        }
    }
}