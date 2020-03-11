package obenhmud_2205_Assignment1;

import java.io.*;
import java.util.Arrays;
import java.util.Scanner;

public class Assignment1
{

	public int[][] denseMatrixMult(int[][] A, int[][] B, int size)
	{
		int[][] C = new int[size][size];
		if (size == 1)
			C[0][0] = A[0][0] * B[0][0];
		else
		{
			// DIVIDING MATRIX A INTO 4 PARTS
			int[][] A11 = new int[size / 2][size / 2];
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					A11[i][j] = A[i][j];
				}
			}

			int[][] A12 = new int[size / 2][size / 2];
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					A12[i][j - size / 2] = A[i][j];
				}
			}
			int[][] A21 = new int[size / 2][size / 2];
			for (int i = size / 2; i < size; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					A21[i - size / 2][j] = A[i][j];
				}
			}
			int[][] A22 = new int[size / 2][size / 2];
			for (int i = size / 2; i < size; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					A22[i - size / 2][j - size / 2] = A[i][j];
				}
			}

			// DIVIDING MATRIX B INTO 4 PARTS
			int[][] B11 = new int[size / 2][size / 2];
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					B11[i][j] = B[i][j];
				}
			}
			int[][] B12 = new int[size / 2][size / 2];
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					B12[i][j - size / 2] = B[i][j];
				}
			}
			int[][] B21 = new int[size / 2][size / 2];
			for (int i = size / 2; i < size; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					B21[i - size / 2][j] = B[i][j];
				}
			}
			int[][] B22 = new int[size / 2][size / 2];
			for (int i = size / 2; i < size; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					B22[i - size / 2][j - size / 2] = B[i][j];
				}
			}

			int[][] M0 = denseMatrixMult(sum(A11, A22, 0, 0, 0, 0, size / 2), sum(B11, B22, 0, 0, 0, 0, size / 2),
					size / 2);
			int[][] M1 = denseMatrixMult(sum(A21, A22, 0, 0, 0, 0, size / 2), B11, size / 2);
			int[][] M2 = denseMatrixMult(A11, sub(B12, B22, 0, 0, 0, 0, size / 2), size / 2);
			int[][] M3 = denseMatrixMult(A22, sub(B21, B11, 0, 0, 0, 0, size / 2), size / 2);
			int[][] M4 = denseMatrixMult(sum(A11, A12, 0, 0, 0, 0, size / 2), B22, size / 2);
			int[][] M5 = denseMatrixMult(sub(A21, A11, 0, 0, 0, 0, size / 2), sum(B11, B12, 0, 0, 0, 0, size / 2),
					size / 2);
			int[][] M6 = denseMatrixMult(sub(A12, A22, 0, 0, 0, 0, size / 2), sum(B21, B22, 0, 0, 0, 0, size / 2),
					size / 2);

			int C11[][] = sum(sub(sum(M0, M3, 0, 0, 0, 0, size / 2), M4, 0, 0, 0, 0, size / 2), M6, 0, 0, 0, 0,
					size / 2);
			int[][] C12 = sum(M2, M4, 0, 0, 0, 0, size / 2);
			int[][] C21 = sum(M1, M3, 0, 0, 0, 0, size / 2);
			int[][] C22 = sum(sub(sum(M0, M2, 0, 0, 0, 0, size / 2), M1, 0, 0, 0, 0, size / 2), M5, 0, 0, 0, 0,
					size / 2);

			// joining all C's together into the original C
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					C[i][j] = C11[i][j];
				}
			}
			for (int i = 0; i < size / 2; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					C[i][j] = C12[i][j - size / 2];
				}
			}
			for (int i = size / 2; i < size; i++)
			{
				for (int j = 0; j < size / 2; j++)
				{
					C[i][j] = C21[i - size / 2][j];
				}
			}
			for (int i = size / 2; i < size; i++)
			{
				for (int j = size / 2; j < size; j++)
				{
					C[i][j] = C22[i - size / 2][j - size / 2];
				}
			}

		}
		return C;

	}

	public int[][] sum(int[][] A, int[][] B, int x1, int y1, int x2, int y2, int n)
	{
		int[][] C = new int[n][n];
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				C[i][j] = A[i + x1][j + y1] + B[i + x2][j + y2];
			}
		}
		return C;
	}

	public int[][] sub(int[][] A, int[][] B, int x1, int y1, int x2, int y2, int n)
	{
		int[][] C = new int[n][n];
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				C[i][j] = A[i + x1][j + y1] - B[i + x2][j + y2];
			}
		}
		return C;
	}

	public int[][] initMatrix(int n)
	{
		int A[][] = new int[n][n];
		return A;

	}

	public void printMatrix(int n, int[][] A)
	{
		initMatrix(n);
		for (int i = 0; i < n; i++)
		{
			for (int j = 0; j < n; j++)
			{
				System.out.print(A[i][j] + " ");
			}
			System.out.println();
		}
	}

	public int[][] readMatrix(String filename, int n) throws Exception
	{
		Scanner matrixScanner = new Scanner(new File(filename));
		String matrix = matrixScanner.useDelimiter("\\A").next();
		matrixScanner.close(); // Put this call in a finally block

		int counter = 0;

		int A[][] = new int[n][n];
		matrix = matrix.replaceAll("\\r\\n|\\r|\\n", " ");
		String[] numbersArray = matrix.split(" ");
		int[] numbersArrayInt = new int[numbersArray.length];

		for (int i = 0; i < numbersArrayInt.length; i++)
		{
			numbersArrayInt[i] = Integer.parseInt(numbersArray[i]);
		}

		while (counter < numbersArrayInt.length)
		{
			for (int j = 0; j < n; j++)
			{
				for (int k = 0; k < n; k++)
				{
					A[j][k] = numbersArrayInt[counter];
					counter++;
				}

			}

		}

		return A;

	}

}
