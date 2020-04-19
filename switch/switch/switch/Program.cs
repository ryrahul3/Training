using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @switch
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.WriteLine("Enter 1-Coffe 2- tea 3-water");
            a = Convert.ToInt16(Console.ReadLine());

            switch (a)
            {
                case 1:
                    Console.WriteLine("you choose coffee");
                    break;
                case 2:

                    Console.WriteLine("You choose tea");
                    break;

                case 3:
                    Console.WriteLine("You choose tea");
                    break;
                default:
                    Console.WriteLine("Invalid input!!");
                    break;
            }
            Console.ReadKey();
        }
    }
}
