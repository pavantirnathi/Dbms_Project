import React, { Component } from "react";

export default class Patient extends Component {
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>Patients</h1>
        </div>
        <table className="min-w-full divide-y divide-gray-200 h-96 ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Blood Type
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rh
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <p>{"Blood required"}</p>
                <p>{"(units)"}</p>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {/* {allplaces.map((place, index) => ( */}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT168
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Sunder Malhotra
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  21
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                A
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  male
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                3
              </td>
            </tr>
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT456
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Vineet Rajavade
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  19
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                A
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  male
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                4
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT236
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Panini Divakar
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  6
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                B
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  female
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                8
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                -
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT172
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Dayananda Lata
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  12
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                A
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  male
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                6
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT196
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Navin Mahanti
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  30
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                O
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                -
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  male
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                4
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT308
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Anya Sinha
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  23
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                AB
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  female
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                4
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT608
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Kasturbai Upadhyay
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  28
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                A
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                -
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  female
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                7
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT412
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Lakshmana Nancy
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  31
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                AB
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  female
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                8
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center font-medium text-gray-900">
                  PT609
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Durgawati Banahatti
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  25
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                B
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                -
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  font-medium text-gray-900">
                  female
                </div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                8
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
        <div className="my-10">
          <div className="flex items-center justify-center">
            <button className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-8">
              Edit
            </button>
            <button className="bg-gray-800 text-gray-300 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-8">
              Print
            </button>
          </div>
        </div>
      </div>
    );
  }
}
