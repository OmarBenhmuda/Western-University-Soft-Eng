using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class Enemy_2Movement : MonoBehaviour
{
    public Rigidbody rb;

    public GameObject enemy2;
    private double _generatedNumber;
    public float speed = 3;

    private float _horizontalDirection;


    void Start()
    {
        rb = GetComponent<Rigidbody>();
        
        
        
        _generatedNumber = Random.value;

        if (_generatedNumber > 0.5)
        {
            _horizontalDirection = -1;
        }
        if (_generatedNumber <= 0.5)
        {
            _horizontalDirection = 1;
        }




        Vector3 movement = new Vector3(_horizontalDirection, 0.0f, -1f);

        rb.velocity = movement * speed;
    }

    private void Update()
    {
        if (rb.position.x <= -7.4 || rb.position.x >= 7 || rb.position.z <= -8)
        {
            Destroy(enemy2);
        }
    }
}