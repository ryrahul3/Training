using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int length = -1;
            long Factorial = 1;
            Console.Write("Enter No.: ");
            length = Convert.ToInt32(Console.ReadLine());
            // Console.Write(length);
            for (int i = 1; i <= length; i++)
            {
                Factorial = Factorial * i;


                if (i == length)
                {
                    Console.Write(i + "=");
                }
                else
                {

                    Console.Write(i + "*");
                }
            }
            Console.Write(Factorial);
            Console.ReadKey();
        }

    }
}
