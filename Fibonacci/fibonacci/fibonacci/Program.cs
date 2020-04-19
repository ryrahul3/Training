using System;


namespace fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Fibonacci series upto 5 step: ");
            int n = 0, m = 1, next;
            for (int i = 0; i <= 5; i++)
            {
                Console.Write(n);
                next = n + m;
                n = m;
                m = next;


            }
            Console.ReadKey();

        }
    }
}
