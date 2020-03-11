using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class RollingBall : MonoBehaviour
{

    [SerializeField]
    private float speed = 4;

    public Text countText;
    public Text winText;

    private Rigidbody rb;
    private int count;

    // Start is called before the first frame update
    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        count = 0;
        SetCount();
    }

    // Update is called once per frame
    private void Update()
    {
        float movementHorizontal = Input.GetAxis("Horizontal"); //Uses the horizontal axis to move the ball horizontally
        float movementVertical = Input.GetAxis("Vertical"); // Uses the vertical axis to move the ball vertically

        Vector3 movement = new Vector3(movementHorizontal, 0.01f, movementVertical);

        rb.AddForce(movement * speed);
    }

    private void SetCount() // puts the current score and also checks if the game has been complete
    {
        countText.text = "Count: " + count.ToString();
        if (count == 12)
        {
            winText.text = "YOU WIN";
            Invoke("restart", 1);
        }
    }

    private void restart() //Pauses the game and then restarts it after 1500 milliseconds
    {
        System.Threading.Thread.Sleep(1500);
        SceneManager.LoadScene("MainScene");
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("CapsuleCollect"))
        {
            other.gameObject.SetActive(false);
            count += 1;
            SetCount();
        }
        else if (other.gameObject.CompareTag("CubeCollect"))
        {
            other.gameObject.SetActive(false);
            count += 2;
            SetCount();
        }
    }
}