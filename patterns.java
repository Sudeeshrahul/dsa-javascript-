
public class patterns {
	
	public static void StairCase(int m) {
		for(int i = 0; i <= m; i++) 
		{
			for(int j = 0; j <= m-i; j++)
			{
				System.out.print(" ");
			}
			for(int k = 0; k <= i; k++)
			{
				System.out.print("#");
			}
			System.out.println();
		}
	}
	
	public static void piramid(int n) {
		for(int i = 0; i <= n; i++)
		{
			for(int j = i; j <= n; j++)
			{
				System.out.print(" ");
			}
			for(int k = 0; k <= i; k++)
			{
				System.out.print("* ");
			}
			System.out.println();
		}
	}
	
	public static void primeNumIncreasing(int n) {
		for(int i = 1; i <= n; i++)
		{	
			for(int j = 1; j <= i; j++)
			{
				System.out.print(j);
			}
			System.out.println();
		}
		
	}
	public static void main(String[] args) {
		StairCase(5);
		piramid(5);
		primeNumIncreasing(5);

	}

}