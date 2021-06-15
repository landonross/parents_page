/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'Bonnie Ross',
    title: 'Real Estate Professional',
    role: 'Active',
    email: 'bonnie.ross@gmail.com',
    telephone: '+1-801-380-4617',
    imageUrl:
      'https://www.century21.com/c21/photo/240x320/c21.azureedge.net/1103i103/9t6b2x8ejmby4g27d8kbfrg717i103',
  },
  {
    name: 'Tracy Ross',
    title: 'Real Estate Professional',
    role: 'Active',
    email: 'tracy.ross@gmail.com',
    telephone: '+1-801-372-1514',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/116716204_10217919043542895_7249108073556004207_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OlntzwdACxwAX9IA9zb&_nc_ht=scontent-lax3-1.xx&oh=940395a32791099dac945fe9868f66cc&oe=60E74AF0',
  },
  // More people...
]

export default function Cards() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
            </div>
            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call: {person.telephone}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}