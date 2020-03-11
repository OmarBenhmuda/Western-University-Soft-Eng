using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Random = UnityEngine.Random;

public class Main : MonoBehaviour
{
    private double _generatedNumber; //This number will be used to randomly select which ship will spawn

    public GameObject enemy1;
    public GameObject enemy2;

    private void Start()
    {
        Spawn();
    }


    void Spawn()
    {
        Vector3 spawnLocation = new Vector3(Random.Range(-5, 4), 1, 7);    
        _generatedNumber = Random.value;
        if (_generatedNumber > 0.5)
        {
            Instantiate(enemy1, spawnLocation, Quaternion.identity);
        }
        else
        {
            Instantiate(enemy2, spawnLocation, Quaternion.identity);
        }

        Invoke("Spawn", 2);
    }
}