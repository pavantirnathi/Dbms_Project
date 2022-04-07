import React, { Component } from "react";

export default class Donor extends Component {
  render() {
    return (
      <div className="mt-40 px-auto lg:px-40">
        <div className="my-4 flex justify-center items-center text-2xl font-medium">
          <h1>Donors</h1>
        </div>
        <table className="min-w-full divide-y divide-gray-200 h-96 ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                Blood Type
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                Rh
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="  px-4 py-3 text-center text-xs text-gray-500 uppercase tracking-wider"
              >
                <p>{"Blood collected"}</p>
                <p>{"(units)"}</p>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {/* {allplaces.map((place, index) => ( */}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT313</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Iara Lohengrin
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">45</div>
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
                <div className="text-sm text-center  text-gray-900">female</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                2
              </td>
            </tr>
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT179</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Henk Chisomo
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">45</div>
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
                <div className="text-sm text-center  text-gray-900">male</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                3
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT421</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Mathusalem Lilit
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">50</div>
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
                <div className="text-sm text-center  text-gray-900">male</div>
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
                <div className="text-sm text-center text-gray-900">PT845</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Laurentius Tuuli
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">47</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                O
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">female</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                2
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT568</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Parvati Melati
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">47</div>
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
                <div className="text-sm text-center  text-gray-900">female</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                1
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT311</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Avrora Safa
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">34</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                AB
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                -
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">female</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                2
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT139</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Leonardas Dayana
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">27</div>
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
                <div className="text-sm text-center  text-gray-900">male</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                3
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT810</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  Albertas Velma
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">22</div>
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
                <div className="text-sm text-center  text-gray-900">male</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                2
              </td>
            </tr>{" "}
            <tr>
              <td className="  px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center text-gray-900">PT574</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">
                  David Edgar
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">28</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                O
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                +
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-center  text-gray-900">male</div>
                {/* <div className="text-sm text-center  text-gray-500">
                          {place.name}
                        </div> */}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-center  text-gray-500">
                4
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
