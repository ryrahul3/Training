using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Multiplication
{
    class Program
    {
        static void Main(string[] args)
        {
            int mul = 0, num;
            Console.Write("Enter Number : ");
            num = Convert.ToInt16(Console.ReadLine());
            for (int i = 1; i <= 10; i++)
            {

                mul = num * i;
                Console.WriteLine(num + " X " + i + " = " + mul);
            }
            Console.ReadKey();

        }
    }
}
