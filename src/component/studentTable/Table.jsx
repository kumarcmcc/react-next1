import {people} from '../StudentData'
import studentlogo from '../../assets/avatar.png'

export default function Table() {

    const classone = people.filter(person =>
        person.which_class === 'classone'
      );
      const classtwo = people.filter(person =>
        person.which_class === 'classtwo'
      );
      const classthree = people.filter(person =>
        person.which_class === 'classthree'
        );  

  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#FFFFFF0D]">
                                <th
                                    className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left"
                                >
                                    ID
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold text-left"
                                >
                                    Name
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Scores
                                </th>
                                <th
                                    className="p-5 text-sm md:text-xl font-semibold"
                                >
                                    Percentage
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl" colspan="4">
                                    className One
                                </td>
                            </tr>

                            {classone.map(classone =>
                                <tr className="border-b border-[#7ECEB529]" key={classone.id}>
                                <td className="p-5 text-sm md:text-xl">{classone.id}</td>
                                <td className="p-5 text-sm md:text-xl">
                                    <div className="flex space-x-3 items-center">
                                        <img
                                            className="w-8 h-8"
                                            src={studentlogo}
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span className="whitespace-nowrap"
                                            >{classone.name}</span
                                        >
                                    </div>
                                </td>
                                <td className="p-5 text-sm md:text-xl text-center">
                                {classone.score}
                                </td>
                                <td className="p-5 text-sm md:text-xl text-center">
                                {classone.percentage}
                                </td>
                            </tr>
                                )}
                            
                            

                            
                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl" colspan="4">
                                    className Two
                                </td>
                            </tr>

                            {classtwo.map(classtwo =>
                              <tr className="border-b border-[#7ECEB529]" key={classtwo.id}>
                              <td className="p-5 text-sm md:text-xl">{classtwo.id}</td>
                              <td className="p-5 text-sm md:text-xl">
                                  <div className="flex space-x-3 items-center">
                                      <img
                                          className="w-8 h-8"
                                          src={studentlogo}
                                          width="32"
                                          height="32"
                                          alt="John Smith"
                                      />
                                      <span className="whitespace-nowrap"
                                          >{classtwo.name}</span
                                      >
                                  </div>
                              </td>
                              <td className="p-5 text-sm md:text-xl text-center">
                              {classtwo.score}
                              </td>
                              <td className="p-5 text-sm md:text-xl text-center">
                              {classtwo.percentage}
                              </td>
                          </tr>  
                                )}
                            




                            <tr className="bg-white/5">
                                <td className="p-5 text-sm md:text-xl" colspan="4">
                                    className Three
                                </td>
                            </tr>
                            {classthree.map(classthree =>
                                <tr className="border-b border-[#7ECEB529]" key={classthree.id}>
                                <td className="p-5 text-sm md:text-xl">{classthree.id}</td>
                                <td className="p-5 text-sm md:text-xl">
                                    <div className="flex space-x-3 items-center">
                                        <img
                                            className="w-8 h-8"
                                            src={studentlogo}
                                            width="32"
                                            height="32"
                                            alt="John Smith"
                                        />
                                        <span className="whitespace-nowrap"
                                            >{classthree.name}</span
                                        >
                                    </div>
                                </td>
                                <td className="p-5 text-sm md:text-xl text-center">
                                    {classthree.score}
                                </td>
                                <td className="p-5 text-sm md:text-xl text-center">
                                    {classthree.percentage}
                                </td>
                            </tr>
                                )}
                            
                            
                        </tbody>
                    </table>
                </div>
  )
}
