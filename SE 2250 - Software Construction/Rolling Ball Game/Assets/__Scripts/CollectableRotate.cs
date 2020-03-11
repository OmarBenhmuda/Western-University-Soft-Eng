using UnityEngine;

public class CollectableRotate : MonoBehaviour
{
    // Update is called once per frame
    private void Update()
    {
        transform.Rotate(new Vector3(15, 30, 50) * Time.deltaTime);
    }
}