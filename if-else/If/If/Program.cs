using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace If
{
    class Program
    {
        static void Main(string[] args)
        { int i=0;
            Console.Write("Enter any no. : ");
            i = Convert.ToInt16(Console.ReadLine());
            if(i%2==0)
            {
                Console.WriteLine("Even");
            }
            else
            {
                Console.WriteLine("odd");
            }
            Console.ReadKey();
        }
    }
}
