using System;
using UnityEngine;
using System.Collections;

public class BoundsCheck : MonoBehaviour
{
    private Vector3 _pos;
    private Rigidbody _rb;
    public float tilt;
    public float speed;
    public GameObject spaceShip;

    private void Start()
    {
        _rb = GetComponent<Rigidbody>();
    }

    private void FixedUpdate()
    {
        //Ship Movement
        float movementHorizontal = Input.GetAxis("Horizontal");
        float movementVertical = Input.GetAxis("Vertical");

        Vector3 movement = new Vector3(movementHorizontal, 0.0f, movementVertical);

        _rb.velocity = movement * speed;


        _rb.rotation = Quaternion.Euler(0.0f, 0.0f, _rb.velocity.x * -tilt);


        //---------------------------Stopping ship from going past boundaries-----------------

        _pos = _rb.transform.position; //Setting the vector _pos to transform the rigid-body's position


        //In each if statement, if the ship reaches one of the edge boundaries, then it will keep setting the ship
        //back to that boundary, making it seem as if there's a wall.

        if (_rb.position.x > 5f)
        {
            _pos.x = 5f;

            _rb.transform.position = _pos;
        }

        if (_rb.position.x < -5f)
        {
            _pos.x = -5f;

            _rb.transform.position = _pos;
        }

        if (_rb.position.z < -5.5f)
        {
            _pos.z = -5.5f;

            _rb.transform.position = _pos;
        }

        if (_rb.position.z > 5f)
        {
            _pos.z = 5f;

            _rb.transform.position = _pos;
        }
        
        
        

        
    }


    //When the ship collides with anything, it will check the tag. If the tag is an enemy, it will destroy the enemy
    //and the player's ship
    private void OnCollisionEnter(Collision other)
    {
        if (other.gameObject.CompareTag("Enemy"))
        {
            Destroy(other.gameObject);
            Destroy(spaceShip);
        }
    }
    
    
    void OnDrawGizmos () {
        if (!Application.isPlaying) return;
        Vector3 boundSize = new Vector3(2, 2, 0.1f);
        Gizmos.DrawWireCube(Vector3.zero, boundSize);
    }

    private void OnDrawGizmosSelected()
    {
        OnDrawGizmos();
    }
}