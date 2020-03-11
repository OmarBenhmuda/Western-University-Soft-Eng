using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy_1Movement : MonoBehaviour
{
    public Rigidbody rb;
    public GameObject enemy1;
    public float speed = 3;


    void Start()
    {
        rb = GetComponent<Rigidbody>();
        Vector3 movement = new Vector3(0f, 0.0f, -1f);
        rb.velocity = movement * speed;
    }


    private void Update()
    {
        if (rb.position.x <= -8 || rb.position.x >= 8 || rb.position.z <= -8)
        {
            Destroy(enemy1);
        }
    }
}