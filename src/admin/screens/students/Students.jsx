import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Table, Pagination } from "flowbite-react";

const Students = () => {
  // Load student data
  const allStudents = useLoaderData();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // Derived states
  const totalStudents = allStudents.length;
  const totalPages = Math.ceil(totalStudents / studentsPerPage);

  // Calculate current students
  const currentStudents = allStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  // Handle page change
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {currentStudents.map((stu) => (
            <Table.Body className="divide-y" key={stu.id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>#000{stu.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {stu.name}
                </Table.Cell>
                <Table.Cell>{stu.gender}</Table.Cell>
                <Table.Cell>{stu.phone}</Table.Cell>
                <Table.Cell>{stu.email}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageClick}
          showIcons
        />
      </div>
    </div>
  );
};

export default Students;