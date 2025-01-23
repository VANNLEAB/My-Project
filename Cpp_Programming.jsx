import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const Cpp_Programming = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
            id="closeSidebar"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto"></div>
      </div>

      {/* Button to toggle Sidebar (for mobile) */}
      <div className="fixed bottom-4 right-20 md:hidden transform px-20">
        <button
          onClick={() => setOpen(!open)} // Toggle open/close state
          className="p-3 bg-blue-500 hover:bg-blue-600 focus:outline-none shadow-lg"
        >
          <span className="text-white text-lg">☰</span>
        </button>
      </div>

      {/* Your Sidebar (Conditional Rendering based on `open` state) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300"
          id="sidebar"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto">
            <ul className="space-y-4">
              <ul>
                <li>
                  <a href="#introduction-to-cpp" className="hover:text-red-500">
                    1. Introduction to C++
                  </a>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <a href="#overview-of-cpp" className="hover:text-red-500">
                        1.1. Overview of C++
                      </a>
                    </li>
                    <li>
                      <a
                        href="#setting-up-environment"
                        className="hover:text-red-500"
                      >
                        1.2. Setting Up Development Environment (IDE & Compiler)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#writing-compiling-program"
                        className="hover:text-red-500"
                      >
                        1.3. Writing and Compiling a Simple C++ Program
                      </a>
                    </li>
                    <li>
                      <a
                        href="#basic-syntax-structure"
                        className="hover:text-red-500"
                      >
                        1.4. Basic Syntax and Structure
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                <a
                  href="#variables-and-data-types"
                  className="hover:text-red-500"
                >
                  2. Variables and Data Types
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#declaring-variables"
                      className="hover:text-red-500"
                    >
                      2.1. Declaring Variables
                    </a>
                  </li>
                  <li>
                    <a href="#data-types" className="hover:text-red-500">
                      2.2. Data Types (int, float, char, string, bool)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#constants-type-modifiers"
                      className="hover:text-red-500"
                    >
                      2.3. Constants and Type Modifiers
                    </a>
                  </li>
                  <li>
                    <a href="#input-output" className="hover:text-red-500">
                      2.4. Input and Output (cin and cout)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#operators-and-expressions"
                  className="hover:text-red-500"
                >
                  3. Operators and Expressions
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#arithmetic-operators"
                      className="hover:text-red-500"
                    >
                      3.1. Arithmetic Operators
                    </a>
                  </li>
                  <li>
                    <a
                      href="#relational-logical-operators"
                      className="hover:text-red-500"
                    >
                      3.2. Relational and Logical Operators
                    </a>
                  </li>
                  <li>
                    <a href="#bitwise-operators" className="hover:text-red-500">
                      3.3. Bitwise Operators
                    </a>
                  </li>
                  <li>
                    <a
                      href="#assignment-compound-assignment"
                      className="hover:text-red-500"
                    >
                      3.4. Assignment and Compound Assignment Operators
                    </a>
                  </li>
                  <li>
                    <a
                      href="#increment-decrement-operators"
                      className="hover:text-red-500"
                    >
                      3.5. Increment and Decrement Operators
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#control-flow-statements"
                  className="hover:text-red-500"
                >
                  4. Control Flow Statements
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#conditional-statements"
                      className="hover:text-red-500"
                    >
                      4.1. Conditional Statements (if, else if, else, switch)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#looping-statements"
                      className="hover:text-red-500"
                    >
                      4.2. Looping Statements (for, while, do-while)
                    </a>
                  </li>
                  <li>
                    <a href="#jump-statements" className="hover:text-red-500">
                      4.3. Jump Statements (break, continue, goto)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#functions-in-cpp" className="hover:text-red-500">
                  5. Functions in C++
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#function-declaration-definition"
                      className="hover:text-red-500"
                    >
                      5.1. Function Declaration and Definition
                    </a>
                  </li>
                  <li>
                    <a
                      href="#function-parameters-return-types"
                      className="hover:text-red-500"
                    >
                      5.2. Function Parameters and Return Types
                    </a>
                  </li>
                  <li>
                    <a
                      href="#function-overloading"
                      className="hover:text-red-500"
                    >
                      5.3. Function Overloading
                    </a>
                  </li>
                  <li>
                    <a href="#inline-functions" className="hover:text-red-500">
                      5.4. Inline Functions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#recursive-functions"
                      className="hover:text-red-500"
                    >
                      5.5. Recursive Functions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#non-return-void-functions"
                      className="hover:text-red-500"
                    >
                      5.6. Non-Return (Void) Functions
                    </a>
                  </li>
                  <li>
                    <a href="#default-arguments" className="hover:text-red-500">
                      5.7. Default Arguments in Functions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#function-templates"
                      className="hover:text-red-500"
                    >
                      5.8. Function Templates
                    </a>
                  </li>
                  <li>
                    <a href="#lambda-functions" className="hover:text-red-500">
                      5.9. Lambda Functions in C++
                    </a>
                  </li>
                  <li>
                    <a href="#function-pointers" className="hover:text-red-500">
                      5.10. Passing Functions as Arguments (Function Pointers)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#arrays-and-strings" className="hover:text-red-500">
                  6. Arrays and Strings
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#one-dimensional-multi-dimensional-arrays"
                      className="hover:text-red-500"
                    >
                      6.1. One-Dimensional and Multi-Dimensional Arrays
                    </a>
                  </li>
                  <li>
                    <a href="#array-operations" className="hover:text-red-500">
                      6.2. Array Operations
                    </a>
                  </li>
                  <li>
                    <a href="#strings-in-cpp" className="hover:text-red-500">
                      6.3. Strings in C++ (char arrays and string class)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#string-manipulation-functions"
                      className="hover:text-red-500"
                    >
                      6.4. String Manipulation Functions
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#pointers-and-references"
                  className="hover:text-red-500"
                >
                  7. Pointers and References
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#introduction-to-pointers"
                      className="hover:text-red-500"
                    >
                      7.1. Introduction to Pointers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pointer-arithmetic"
                      className="hover:text-red-500"
                    >
                      7.2. Pointer Arithmetic
                    </a>
                  </li>
                  <li>
                    <a
                      href="#references-and-dereferencing"
                      className="hover:text-red-500"
                    >
                      7.3. References and Dereferencing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#dynamic-memory-allocation"
                      className="hover:text-red-500"
                    >
                      7.4. Dynamic Memory Allocation (new and delete)
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#oop" className="hover:text-red-500">
                  8. Object-Oriented Programming (OOP)
                </a>
                <ul className="ml-4 space-y-2">
                  <li>
                    <a
                      href="#introduction-to-oop"
                      className="hover:text-red-500"
                    >
                      8.1. Introduction to OOP Concepts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#classes-and-objects"
                      className="hover:text-red-500"
                    >
                      8.2. Classes and Objects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#constructors-destructors"
                      className="hover:text-red-500"
                    >
                      8.3. Constructors and Destructors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#encapsulation-data-hiding"
                      className="hover:text-red-500"
                    >
                      8.4. Encapsulation and Data Hiding
                    </a>
                  </li>
                  <li>
                    <a
                      href="#inheritance-polymorphism"
                      className="hover:text-red-500"
                    >
                      8.5. Inheritance and Polymorphism
                    </a>
                    <ul className="ml-4 space-y-2">
                      <li>
                        <a
                          href="#introduction-to-inheritance"
                          className="hover:text-red-500"
                        >
                          8.5.1. Introduction to Inheritance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#types-of-inheritance"
                          className="hover:text-red-500"
                        >
                          8.5.2. Types of Inheritance
                        </a>
                        <ul className="ml-4 space-y-2">
                          <li>
                            <a
                              href="#single-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.2.1. Single Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#multiple-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.2.2. Multiple Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#multilevel-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.2.3. Multilevel Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#hierarchical-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.2.4. Hierarchical Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#hybrid-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.2.5. Hybrid Inheritance
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="#access-specifiers-in-inheritance"
                          className="hover:text-red-500"
                        >
                          8.5.3. Access Specifiers in Inheritance
                        </a>
                        <ul className="ml-4 space-y-2">
                          <li>
                            <a
                              href="#public-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.3.1. Public Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#protected-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.3.2. Protected Inheritance
                            </a>
                          </li>
                          <li>
                            <a
                              href="#private-inheritance"
                              className="hover:text-red-500"
                            >
                              8.5.3.3. Private Inheritance
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="#function-overriding"
                          className="hover:text-red-500"
                        >
                          8.5.4. Function Overriding in Inheritance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#virtual-functions-polymorphism"
                          className="hover:text-red-500"
                        >
                          8.5.5. Virtual Functions and Polymorphism
                        </a>
                      </li>
                      <li>
                        <a
                          href="#base-derived-constructors"
                          className="hover:text-red-500"
                        >
                          8.5.6. Base Class and Derived Class Constructors
                        </a>
                      </li>
                      <li>
                        <a
                          href="#virtual-base-classes"
                          className="hover:text-red-500"
                        >
                          8.5.7. Virtual Base Classes (Solving Diamond Problem)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#abstract-classes-pure-virtual-functions"
                          className="hover:text-red-500"
                        >
                          8.5.8. Abstract Classes and Pure Virtual Functions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#abstract-classes-interfaces"
                      className="hover:text-red-500"
                    >
                      8.6. Abstract Classes and Interfaces
                    </a>
                  </li>
                </ul>
                <li>
                  <a href="#file-handling" className="hover:text-red-500">
                    9. File Handling in C++
                  </a>
                  <ul className="ml-4 space-y-2">
                    <li>
                      <a href="#file-streams" className="hover:text-red-500">
                        9.1. File Streams (ifstream, ofstream, fstream)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#reading-writing-files"
                        className="hover:text-red-500"
                      >
                        9.2. Reading and Writing Files
                      </a>
                    </li>
                    <li>
                      <a href="#file-operations" className="hover:text-red-500">
                        9.3. File Operations (Appending, Closing, Seeking)
                      </a>
                    </li>
                  </ul>
                  <li>
                    <a href="#stl" className="hover:text-red-500">
                      10. Standard Template Library (STL)
                    </a>
                    <ul className="ml-4 space-y-2">
                      <li>
                        <a
                          href="#introduction-to-stl"
                          className="hover:text-red-500"
                        >
                          10.1. Introduction to STL
                        </a>
                      </li>
                      <li>
                        <a
                          href="#vectors-lists-queues"
                          className="hover:text-red-500"
                        >
                          10.2. Vectors, Lists, and Queues
                        </a>
                      </li>
                      <li>
                        <a href="#stack-deque" className="hover:text-red-500">
                          10.3. Stack and Deque
                        </a>
                      </li>
                      <li>
                        <a href="#maps-sets" className="hover:text-red-500">
                          10.4. Maps and Sets
                        </a>
                      </li>
                    </ul>
                    <li>
                      <a
                        href="#exception-handling"
                        className="hover:text-red-500"
                      >
                        11. Exception Handling
                      </a>
                      <ul className="ml-4 space-y-2">
                        <li>
                          <a
                            href="#try-catch-throw"
                            className="hover:text-red-500"
                          >
                            11.1. Try, Catch, and Throw
                          </a>
                        </li>
                        <li>
                          <a
                            href="#handling-multiple-exceptions"
                            className="hover:text-red-500"
                          >
                            11.2. Handling Multiple Exceptions
                          </a>
                        </li>
                        <li>
                          <a
                            href="#custom-exception-handling"
                            className="hover:text-red-500"
                          >
                            11.3. Custom Exception Handling
                          </a>
                        </li>
                      </ul>
                      <li>
                        <a
                          href="#advanced-topics"
                          className="hover:text-red-500"
                        >
                          12. Advanced Topics
                        </a>
                        <ul className="ml-4 space-y-2">
                          <li>
                            <a
                              href="#lambda-expressions"
                              className="hover:text-red-500"
                            >
                              12.1. Lambda Expressions
                            </a>
                          </li>
                          <li>
                            <a
                              href="#smart-pointers"
                              className="hover:text-red-500"
                            >
                              12.2. Smart Pointers (unique_ptr, shared_ptr)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#multithreading"
                              className="hover:text-red-500"
                            >
                              12.3. Multithreading in C++
                            </a>
                          </li>
                          <li>
                            <a
                              href="#networking"
                              className="hover:text-red-500"
                            >
                              12.4. Networking in C++
                            </a>
                          </li>
                        </ul>
                      </li>
                    </li>
                  </li>
                </li>
              </li>
              {/* Add similar nested lists for remaining modules */}
            </ul>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Sidebar សម្រាប់ Desktop */}
        <div className="hidden md:block w-2/4  p-6  overflow-y-auto max-h-[1000px]">
          <h2 className="text-xl font-bold mb-6">
            មេរៀនកម្មវិធី C# Programming
          </h2>
          <ul className="space-y-4">
            <ul>
              <li>
                <a href="#introduction-to-csharp">1. Introduction to C#</a>
                <ul>
                  <li>
                    <a href="#what-is-csharp">1.1 What is C#?</a>
                  </li>
                  <li>
                    <a href="#setting-up-environment">
                      1.2 Setting Up the Environment (Installing .NET SDK &
                      Visual Studio)
                    </a>
                  </li>
                  <li>
                    <a href="#writing-first-program">
                      1.3 Writing and Running Your First C# Program
                    </a>
                  </li>
                  <li>
                    <a href="#understanding-dotnet-framework">
                      1.4 Understanding the .NET Framework
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#csharp-basics">2. C# Basics</a>
                <ul>
                  <li>
                    <a href="#syntax-and-structure">2.1 Syntax and Structure</a>
                  </li>
                  <li>
                    <a href="#variables-and-data-types">
                      2.2 Variables and Data Types
                    </a>
                  </li>
                  <li>
                    <a href="#constants-readonly-fields">
                      2.3 Constants and Readonly Fields
                    </a>
                  </li>
                  <li>
                    <a href="#operators">
                      2.4 Operators (Arithmetic, Logical, Comparison)
                    </a>
                  </li>
                  <li>
                    <a href="#type-casting-conversions">
                      2.5 Type Casting and Conversions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <a href="#control-flow" className="hover:text-red-500">
                3. Control Flow
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#conditional-statements"
                    className="hover:text-red-500"
                  >
                    3.1. Conditional Statements (if, else, switch)
                  </a>
                </li>
                <li>
                  <a href="#loops" className="hover:text-red-500">
                    3.2. Loops (for, while, do-while, foreach)
                  </a>
                </li>
                <li>
                  <a href="#jump-statements" className="hover:text-red-500">
                    3.3. Jump Statements (break, continue, return, goto)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#methods-and-functions" className="hover:text-red-500">
                4. Methods and Functions
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#defining-calling-methods"
                    className="hover:text-red-500"
                  >
                    4.1. Defining and Calling Methods
                  </a>
                </li>
                <li>
                  <a href="#method-parameters" className="hover:text-red-500">
                    4.2. Method Parameters (ref, out, params)
                  </a>
                </li>
                <li>
                  <a href="#method-overloading" className="hover:text-red-500">
                    4.3. Method Overloading
                  </a>
                </li>
                <li>
                  <a href="#recursion" className="hover:text-red-500">
                    4.4. Recursion
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#oop-in-csharp" className="hover:text-red-500">
                5. Object-Oriented Programming (OOP) in C#
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#classes-and-objects" className="hover:text-red-500">
                    5.1. Classes and Objects
                  </a>
                </li>
                <li>
                  <a
                    href="#constructors-destructors"
                    className="hover:text-red-500"
                  >
                    5.2. Constructors and Destructors
                  </a>
                </li>
                <li>
                  <a href="#encapsulation" className="hover:text-red-500">
                    5.3. Encapsulation (Access Modifiers)
                  </a>
                </li>
                <li>
                  <a
                    href="#properties-auto-properties"
                    className="hover:text-red-500"
                  >
                    5.4. Properties and Auto-Properties
                  </a>
                </li>
                <li>
                  <a href="#static-members" className="hover:text-red-500">
                    5.5. Static Members
                  </a>
                </li>
                <li>
                  <a href="#inheritance" className="hover:text-red-500">
                    5.6. Inheritance (base and derived classes)
                  </a>
                </li>
                <li>
                  <a href="#polymorphism" className="hover:text-red-500">
                    5.7. Polymorphism (method overriding, abstract classes,
                    virtual methods)
                  </a>
                </li>
                <li>
                  <a href="#interfaces" className="hover:text-red-500">
                    5.8. Interfaces
                  </a>
                </li>
                <li>
                  <a
                    href="#sealed-partial-classes"
                    className="hover:text-red-500"
                  >
                    5.9. Sealed and Partial Classes
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#exception-handling" className="hover:text-red-500">
                6. Exception Handling
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#try-catch-finally" className="hover:text-red-500">
                    6.1. Try-Catch-Finally Blocks
                  </a>
                </li>
                <li>
                  <a href="#throwing-exceptions" className="hover:text-red-500">
                    6.2. Throwing Exceptions
                  </a>
                </li>
                <li>
                  <a href="#custom-exceptions" className="hover:text-red-500">
                    6.3. Custom Exceptions
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#collections-data-structures"
                className="hover:text-red-500"
              >
                7. Collections and Data Structures
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#arrays" className="hover:text-red-500">
                    7.1. Arrays (one-dimensional, multi-dimensional, jagged)
                  </a>
                </li>
                <li>
                  <a href="#lists" className="hover:text-red-500">
                    7.2. Lists (List&lt;T&gt;)
                  </a>
                </li>
                <li>
                  <a href="#dictionaries" className="hover:text-red-500">
                    7.3. Dictionaries (Dictionary&lt;TKey, TValue&gt;)
                  </a>
                </li>
                <li>
                  <a href="#queues-stacks" className="hover:text-red-500">
                    7.4. Queues and Stacks
                  </a>
                </li>
                <li>
                  <a href="#hashset-sortedset" className="hover:text-red-500">
                    7.5. HashSet and SortedSet
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#file-handling-streams" className="hover:text-red-500">
                8. File Handling and Streams
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#reading-writing-files"
                    className="hover:text-red-500"
                  >
                    8.1. Reading and Writing Files (File, StreamReader,
                    StreamWriter)
                  </a>
                </li>
                <li>
                  <a href="#working-with-json" className="hover:text-red-500">
                    8.2. Working with JSON (System.Text.Json)
                  </a>
                </li>
                <li>
                  <a href="#handling-csv-files" className="hover:text-red-500">
                    8.3. Handling CSV Files
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#linq" className="hover:text-red-500">
                9. LINQ (Language Integrated Query)
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#introduction-to-linq"
                    className="hover:text-red-500"
                  >
                    9.1. Introduction to LINQ
                  </a>
                </li>
                <li>
                  <a href="#linq-queries" className="hover:text-red-500">
                    9.2. LINQ Queries (Where, Select, OrderBy)
                  </a>
                </li>
                <li>
                  <a
                    href="#linq-with-collections"
                    className="hover:text-red-500"
                  >
                    9.3. LINQ with Collections
                  </a>
                </li>
                <li>
                  <a href="#linq-with-databases" className="hover:text-red-500">
                    9.4. LINQ with Databases (Entity Framework)
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#delegates-events-lambda" className="hover:text-red-500">
                10. Delegates, Events, and Lambda Expressions
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#delegates" className="hover:text-red-500">
                    10.1. Delegates (Func, Action, Predicate)
                  </a>
                </li>
                <li>
                  <a href="#lambda-expressions" className="hover:text-red-500">
                    10.2. Lambda Expressions
                  </a>
                </li>
                <li>
                  <a
                    href="#events-event-handling"
                    className="hover:text-red-500"
                  >
                    10.3. Events and Event Handling
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#multithreading-async" className="hover:text-red-500">
                11. Multithreading and Asynchronous Programming
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#threads" className="hover:text-red-500">
                    11.1. Threads (Thread Class)
                  </a>
                </li>
                <li>
                  <a href="#task-based-async" className="hover:text-red-500">
                    11.2. Task-Based Asynchronous Pattern (async and await)
                  </a>
                </li>
                <li>
                  <a
                    href="#parallel-programming"
                    className="hover:text-red-500"
                  >
                    11.3. Parallel Programming (Parallel.For, Parallel.ForEach)
                  </a>
                </li>
                <li>
                  <a href="#background-workers" className="hover:text-red-500">
                    11.4. Background Workers
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#working-with-databases" className="hover:text-red-500">
                12. Working with Databases in C#
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#ado-net-basics" className="hover:text-red-500">
                    12.1. ADO.NET Basics
                  </a>
                </li>
                <li>
                  <a
                    href="#connecting-to-sql-server"
                    className="hover:text-red-500"
                  >
                    12.2. Connecting to SQL Server
                  </a>
                </li>
                <li>
                  <a
                    href="#executing-sql-queries"
                    className="hover:text-red-500"
                  >
                    12.3. Executing SQL Queries with C#
                  </a>
                </li>
                <li>
                  <a
                    href="#entity-framework-core"
                    className="hover:text-red-500"
                  >
                    12.4. Entity Framework Core Basics
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#windows-forms-wpf" className="hover:text-red-500">
                13. Windows Forms and WPF (GUI Development)
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#introduction-to-windows-forms"
                    className="hover:text-red-500"
                  >
                    13.1. Introduction to Windows Forms
                  </a>
                </li>
                <li>
                  <a
                    href="#working-with-controls"
                    className="hover:text-red-500"
                  >
                    13.2. Working with Controls (Buttons, Labels, Textboxes)
                  </a>
                </li>
                <li>
                  <a
                    href="#event-handling-windows-forms"
                    className="hover:text-red-500"
                  >
                    13.3. Event Handling in Windows Forms
                  </a>
                </li>
                <li>
                  <a href="#introduction-to-wpf" className="hover:text-red-500">
                    13.4. Introduction to WPF (Windows Presentation Foundation)
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#asp-net-core" className="hover:text-red-500">
                14. ASP.NET Core (Web Development)
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a
                    href="#introduction-to-asp-net-core"
                    className="hover:text-red-500"
                  >
                    14.1. Introduction to ASP.NET Core
                  </a>
                </li>
                <li>
                  <a href="#mvc-architecture" className="hover:text-red-500">
                    14.2. MVC Architecture in ASP.NET
                  </a>
                </li>
                <li>
                  <a href="#building-web-api" className="hover:text-red-500">
                    14.3. Building a Web API with ASP.NET Core
                  </a>
                </li>
                <li>
                  <a
                    href="#authentication-authorization"
                    className="hover:text-red-500"
                  >
                    14.4. Authentication and Authorization
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#unit-testing" className="hover:text-red-500">
                15. Unit Testing in C#
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#writing-unit-tests" className="hover:text-red-500">
                    15.1. Writing Unit Tests with MSTest and NUnit
                  </a>
                </li>
                <li>
                  <a href="#mocking-with-moq" className="hover:text-red-500">
                    15.2. Mocking with Moq
                  </a>
                </li>
                <li>
                  <a
                    href="#test-driven-development"
                    className="hover:text-red-500"
                  >
                    15.3. Test-Driven Development (TDD) in C#
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#advanced-csharp" className="hover:text-red-500">
                16. Advanced C# Topics
              </a>
              <ul className="ml-4 space-y-2">
                <li>
                  <a href="#reflection" className="hover:text-red-500">
                    16.1. Reflection in C#
                  </a>
                </li>
                <li>
                  <a
                    href="#attributes-annotations"
                    className="hover:text-red-500"
                  >
                    16.2. Attributes and Annotations
                  </a>
                </li>
                <li>
                  <a
                    href="#dependency-injection"
                    className="hover:text-red-500"
                  >
                    16.3. Dependency Injection (DI)
                  </a>
                </li>
                <li>
                  <a href="#design-patterns" className="hover:text-red-500">
                    16.4. Design Patterns (Singleton, Factory, Observer)
                  </a>
                </li>
                <li>
                  <a href="#microservices" className="hover:text-red-500">
                    16.5. Microservices with .NET
                  </a>
                </li>
              </ul>
            </li>

            {/* Add similar nested lists for remaining modules */}
          </ul>
        </div>

        <div className="py-12 px-6 w-full overflow-y-auto max-h-[1000px]">
          <div
            id="introduction-to-csharp"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              1. Introduction to C#
            </h2>
            <p className="mt-4 text-lg">
              C# (អានថា "C Sharp")
              គឺជាភាសាសរសេរកម្មវិធីទំនើបដែលមានលក្ខណៈវត្ថុនិយមបង្កើតឡើងដោយ
              Microsoft។ វាត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការបង្កើតកម្មវិធី
              Windows កម្មវិធីវេបហ្គេម (តាមរយៈ Unity) និងកម្មវិធីទូរស័ព្ទ។ C#
              គឺជាផ្នែកមួយនៃប្រព័ន្ធ .NET
              ដែលផ្តល់នូវក្របខ័ណ្ឌដ៏រឹងមាំសម្រាប់ការអភិវឌ្ឍកម្មវិធីដែលមានស្ថេរភាពនិងសុវត្ថិភាព។
            </p>

            {/* 1.1 What is C#? */}
            <div id="what-is-csharp" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                1.1 What is C#?
              </h3>
              <p className="mt-2">
                C# គឺជាភាសាសរសេរកម្មវិធីដែលបង្កើតឡើងដោយ Microsoft ក្នុងឆ្នាំ
                2000។ វាត្រូវបានរចនាឡើងសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីនៅលើវេទិកា
                .NET។ C# គឺជាភាសាដែលងាយស្រួលរៀននិងមានលក្ខណៈពិសេសដូចជា OOP, type
                safety, និងការគ្រប់គ្រងកំហុស។
              </p>
              <p className="mt-2">
                <strong>លក្ខណៈពិសេសរបស់ C#៖</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>គាំទ្រការសរសេរកម្មវិធីបែបវត្ថុ (OOP)។</li>
                <li>
                  មានប្រព័ន្ធប្រមូលសំរាមដោយស្វ័យប្រវត្តិ (Garbage Collection)។
                </li>
                <li>អាចដំណើរការបានលើវេទិកាផ្សេងៗ (Windows, macOS, Linux)។</li>
                <li>មានបណ្ណាល័យស្តង់ដារដែលធំទូលាយសម្រាប់ការអភិវឌ្ឍ។</li>
              </ul>
            </div>

            {/* 1.2 Setting Up the Environment (Installing .NET SDK & Visual Studio) */}
            <div id="setting-up-environment" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                1.2 Setting Up the Environment (Installing .NET SDK & Visual
                Studio)
              </h3>
              <p className="mt-2">
                ដើម្បីចាប់ផ្តើមសរសេរកម្មវិធី C# អ្នកត្រូវការដំឡើង .NET SDK និង
                IDE ដូចជា Visual Studio។
              </p>
              <p className="mt-2">
                <strong>ជំហានដើម្បីរៀបចំបរិស្ថាន៖</strong>
              </p>
              <ol className="list-decimal ml-6">
                <li>ទាញយក .NET SDK ពីគេហទំព័រផ្លូវការរបស់ Microsoft។</li>
                <li>ដំឡើង Visual Studio ឬ Visual Studio Code។</li>
                <li>ធានាថា .NET SDK ត្រូវបានភ្ជាប់ជាមួយ IDE របស់អ្នក។</li>
              </ol>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការដំឡើង .NET SDK លើ Windows៖</strong>
              </p>
              <SyntaxHighlighter language="bash" style={a11yDark}>
                {`dotnet --version`}
              </SyntaxHighlighter>
            </div>

            {/* 1.3 Writing and Running Your First C# Program */}
            <div id="writing-first-program" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                1.3 Writing and Running Your First C# Program
              </h3>
              <p className="mt-2">
                កម្មវិធី C# ដំបូងរបស់អ្នកអាចត្រូវបានសរសេរនៅក្នុងឯកសារ{" "}
                <code>.cs</code> ហើយដំណើរការដោយប្រើ .NET CLI។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍កម្មវិធី "Hello, World!"៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`}
              </SyntaxHighlighter>
              <p className="mt-2">
                <strong>ជំហានដើម្បីចងក្រង និងដំណើរការ៖</strong>
              </p>
              <ol className="list-decimal ml-6">
                <li>
                  រក្សាទុកកូដនៅក្នុងឯកសារ <code>Program.cs</code>។
                </li>
                <li>
                  បើក terminal ហើយចងក្រងដោយប្រើពាក្យបញ្ជា៖
                  <SyntaxHighlighter language="bash" style={a11yDark}>
                    {`dotnet run`}
                  </SyntaxHighlighter>
                </li>
              </ol>
              <p className="mt-2">
                <strong>លទ្ធផល៖</strong>
              </p>
              <SyntaxHighlighter language="plaintext" style={a11yDark}>
                {`Hello, World!`}
              </SyntaxHighlighter>
            </div>

            {/* 1.4 Understanding the .NET Framework */}
            <div id="understanding-dotnet-framework" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                1.4 Understanding the .NET Framework
              </h3>
              <p className="mt-2">
                .NET
                គឺជាក្របខ័ណ្ឌដែលផ្តល់នូវបណ្ណាល័យនិងឧបករណ៍សម្រាប់ការអភិវឌ្ឍកម្មវិធី។
                វារួមបញ្ចូល CLR (Common Language Runtime) និង FCL (Framework
                Class Library)។
              </p>
              <p className="mt-2">
                <strong>សមាសធាតុសំខាន់ៗនៃ .NET៖</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>CLR: គ្រប់គ្រងការអនុវត្តកូដនិងការគ្រប់គ្រងអង្គចងចាំ។</li>
                <li>FCL: បណ្ណាល័យស្តង់ដារសម្រាប់ការអភិវឌ្ឍ។</li>
                <li>គាំទ្រភាសាចម្រុះ (C#, F#, VB.NET)។</li>
              </ul>
            </div>
          </div>

          <div id="csharp-basics" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              2. C# Basics
            </h2>
            <p className="mt-4 text-lg">
              ផ្នែកនេះគ្របដណ្តប់អំពីគោលគំនិតជាមូលដ្ឋាននៃការសរសេរកម្មវិធី C#
              រួមទាំង syntax
              អថេរប្រភេទទិន្នន័យប្រតិបត្តិករនិងការបំលែងប្រភេទទិន្នន័យ។
              គោលគំនិតទាំងនេះគឺជាការចាំបាច់សម្រាប់ការបង្កើតគ្រឹះរឹងមាំក្នុងការអភិវឌ្ឍ
              C#។
            </p>

            {/* 2.1 Syntax and Structure */}
            <div id="syntax-and-structure" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                2.1 Syntax and Structure
              </h3>
              <p className="mt-2">
                C# syntax គឺស្រដៀងនឹងភាសា C-style
                ផ្សេងទៀតដូចជាមួយនឹងការប្រើប្រាស់វគ្គដែលមានចំណុចចាប់ផ្តើមជាមួយនឹងអនុគមន៍{" "}
                <code>Main()</code>។
              </p>
              <p className="mt-2">
                <strong>គន្លឹះ Syntax របស់ C#៖</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>
                  រាល់កម្មវិធី C# ត្រូវតែមានអនុគមន៍ <code>Main()</code>{" "}
                  ជាចំណុចចាប់ផ្តើម។
                </li>
                <li>
                  ប្រើ <code>using</code> ដើម្បីភ្ជាប់ namespace។
                </li>
                <li>
                  ប្រើ <code>;</code> ដើម្បីបញ្ចប់សេចក្តីថ្លែងការណ៍។
                </li>
                <li>
                  ប្រើ <code>{}</code> ដើម្បីកំណត់ប្លុកកូដ។
                </li>
              </ul>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃកម្មវិធី C# សាមញ្ញ៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 2.2 Variables and Data Types */}
            <div id="variables-and-data-types" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                2.2 Variables and Data Types
              </h3>
              <p className="mt-2">
                អថេរគឺជាកន្លែងសម្រាប់ផ្ទុកទិន្នន័យនិងត្រូវបានកំណត់ដោយប្រភេទទិន្នន័យ។
                C# គាំទ្រប្រភេទទិន្នន័យដូចជា <code>int</code>,{" "}
                <code>double</code>, <code>string</code>, និង <code>bool</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការប្រកាសអថេរ៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int age = 25;
double salary = 1000.50;
string name = "John";
bool isActive = true;`}
              </SyntaxHighlighter>
            </div>

            {/* 2.3 Constants and Readonly Fields */}
            <div id="constants-readonly-fields" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                2.3 Constants and Readonly Fields
              </h3>
              <p className="mt-2">
                Constants និង readonly fields
                គឺជាអថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃបានបន្ទាប់ពីការចាប់ផ្តើម។
                Constants ត្រូវបានកំណត់ដោយប្រើ <code>const</code> ខណៈពេលដែល
                readonly fields ត្រូវបានកំណត់ដោយប្រើ <code>readonly</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`const double PI = 3.14159;
readonly int maxAttempts = 5;`}
              </SyntaxHighlighter>
            </div>

            {/* 2.4 Operators (Arithmetic, Logical, Comparison) */}
            <div id="operators" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                2.4 Operators (Arithmetic, Logical, Comparison)
              </h3>
              <p className="mt-2">
                Operators
                គឺជានិមិត្តសញ្ញាសម្រាប់ធ្វើប្រតិបត្តិការលើតម្លៃនិងអថេរ។ C#
                គាំទ្រប្រតិបត្តិករប្រភេទផ្សេងៗដូចជា arithmetic, logical, និង
                comparison។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃប្រតិបត្តិករ៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int sum = 10 + 5; // Arithmetic
bool result = (10 > 5) && (5 < 10); // Logical
bool isEqual = (10 == 10); // Comparison`}
              </SyntaxHighlighter>
            </div>

            {/* 2.5 Type Casting and Conversions */}
            <div id="type-casting-conversions" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                2.5 Type Casting and Conversions
              </h3>
              <p className="mt-2">
                Type casting
                គឺជាការបំលែងប្រភេទទិន្នន័យពីប្រភេទមួយទៅប្រភេទមួយទៀត។ C#
                គាំទ្រការបំលែង implicit (ស្វ័យប្រវត្តិ) និង explicit
                (ដោយចេញពីអ្នកប្រើប្រាស់)។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ type casting៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`double num1 = 10.5;
int num2 = (int)num1; // Explicit casting

int num3 = 10;
double num4 = num3; // Implicit casting`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="control-flow" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              3. Control Flow
            </h2>
            <p className="mt-4 text-lg">
              Control flow statements នៅក្នុង C#
              អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រប់គ្រងការប្រតិបត្តិកម្មវិធីរបស់អ្នកដោយផ្អែកលើលក្ខខណ្ឌរង្វិលជុំនិងការលោត។
              ផ្នែកនេះគ្របដណ្តប់អំពី conditional statements, loops, និង jump
              statements។
            </p>

            {/* 3.1 Conditional Statements (if, else, switch) */}
            <div id="conditional-statements" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                3.1 Conditional Statements (if, else, switch)
              </h3>
              <p className="mt-2">
                Conditional statements
                ត្រូវបានប្រើដើម្បីប្រតិបត្តិកូដផ្សេងៗដោយផ្អែកលើលក្ខខណ្ឌជាក់លក្ខណះ
                C# គាំទ្រសេចក្តី <code>if</code> <code>else</code> និង{" "}
                <code>switch</code> statements។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ if-else statement៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int age = 18;
if (age >= 18) {
    Console.WriteLine("You are an adult.");
} else {
    Console.WriteLine("You are a minor.");
}`}
              </SyntaxHighlighter>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ switch statement៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int day = 3;
switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Invalid day");
        break;
}`}
              </SyntaxHighlighter>
            </div>

            {/* 3.2 Loops (for, while, do-while, foreach) */}
            <div id="loops" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                3.2 Loops (for, while, do-while, foreach)
              </h3>
              <p className="mt-2">
                Loops
                ត្រូវបានប្រើដើម្បីអនុវត្តកូដដដែលៗដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់ C#
                គាំទ្ររង្វិលជុំដូចជា <code>for</code> <code>while</code>{" "}
                <code>do-while</code> និង <code>foreach</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ for loop៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`for (int i = 0; i < 5; i++) {
    Console.WriteLine("Iteration: " + i);
}`}
              </SyntaxHighlighter>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ while loop៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int i = 0;
while (i < 5) {
    Console.WriteLine("Iteration: " + i);
    i++;
}`}
              </SyntaxHighlighter>
            </div>

            {/* 3.3 Jump Statements (break, continue, return, goto) */}
            <div id="jump-statements" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                3.3 Jump Statements (break, continue, return, goto)
              </h3>
              <p className="mt-2">
                Jump statements
                ត្រូវបានប្រើដើម្បីគ្រប់គ្រងលំហូរនៃកម្មវិធីដោយប្រើ{" "}
                <code>break</code> <code>continue</code> <code>return</code> និង{" "}
                <code>goto</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ break statement៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exit the loop when i is 5
    }
    Console.WriteLine("Iteration: " + i);
}`}
              </SyntaxHighlighter>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ continue statement៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue; // Skip iteration when i is 2
    }
    Console.WriteLine("Iteration: " + i);
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div
            id="methods-and-functions"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              4. Methods and Functions
            </h2>
            <p className="mt-4 text-lg">
              Methods និង functions
              គឺជាប្លុកកូដដែលអាចហៅដើម្បីអនុវត្តកិច្ចការជាក់លាក់។
              ផ្នែកនេះគ្របដណ្តប់អំពីការកំណត់ហៅ methods, parameters, overloading,
              និង recursion។
            </p>

            {/* 4.1 Defining and Calling Methods */}
            <div id="defining-calling-methods" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                4.1 Defining and Calling Methods
              </h3>
              <p className="mt-2">
                Methods គឺជាកូដដែលត្រូវបានកំណត់ដោយប្រើ keyword <code>void</code>{" "}
                (ប្រសិនបើមិនត្រឡប់តម្លៃ) ឬប្រភេទទិន្នន័យជាក់លាក់
                (ប្រសិនបើត្រឡប់តម្លៃ)។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការកំណត់និងហៅ method៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Define a method
void Greet() {
    Console.WriteLine("Hello, World!");
}

// Call the method
Greet();`}
              </SyntaxHighlighter>
            </div>

            {/* 4.2 Method Parameters (ref, out, params) */}
            <div id="method-parameters" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                4.2 Method Parameters (ref, out, params)
              </h3>
              <p className="mt-2">
                Parameters អនុញ្ញាតឱ្យអ្នកបញ្ជូនទិន្នន័យទៅកាន់ method។ C#
                គាំទ្រប្រភេទ parameters ដូចជា <code>ref</code>, <code>out</code>
                , និង <code>params</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ parameters៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Using ref parameter
void Increment(ref int num) {
    num++;
}

int x = 5;
Increment(ref x);
Console.WriteLine(x); // Output: 6

// Using out parameter
void GetValues(out int a, out int b) {
    a = 10;
    b = 20;
}

int y, z;
GetValues(out y, out z);
Console.WriteLine(y + ", " + z); // Output: 10, 20

// Using params
int Sum(params int[] numbers) {
    int sum = 0;
    foreach (int num in numbers) {
        sum += num;
    }
    return sum;
}

int result = Sum(1, 2, 3, 4);
Console.WriteLine(result); // Output: 10`}
              </SyntaxHighlighter>
            </div>

            {/* 4.3 Method Overloading */}
            <div id="method-overloading" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                4.3 Method Overloading
              </h3>
              <p className="mt-2">
                Method overloading អនុញ្ញាតឱ្យអ្នកកំណត់ច្រើន methods
                ដែលមានឈ្មោះដូចគ្នាប៉ុន្តែមាន parameters ខុសគ្នា។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ method overloading៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`void Print(int num) {
    Console.WriteLine("Number: " + num);
}

void Print(string text) {
    Console.WriteLine("Text: " + text);
}

Print(10); // Output: Number: 10
Print("Hello"); // Output: Text: Hello`}
              </SyntaxHighlighter>
            </div>

            {/* 4.4 Recursion */}
            <div id="recursion" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                4.4 Recursion
              </h3>
              <p className="mt-2">
                Recursion គឺជាការហៅ method ដោយខ្លួនឯង។
                វាមានប្រយោជន៍សម្រាប់ការដោះស្រាយបញ្ហាដូចជា factorial ឬ Fibonacci។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ recursion៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int Factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * Factorial(n - 1);
}

int result = Factorial(5);
Console.WriteLine(result); // Output: 120`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="oop-in-csharp" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              5. Object-Oriented Programming (OOP) in C#
            </h2>
            <p className="mt-4 text-lg">
              Object-Oriented Programming (OOP) គឺជារបៀបសរសេរកម្មវិធីដែលប្រើ
              objects និង classes ដើម្បីរៀបចំកម្មវិធី។ C#
              គឺជាភាសាដែលគាំទ្រយ៉ាងពេញលេញនូវគោលគំនិត OOP ដូចជា encapsulation,
              inheritance, និង polymorphism។
              ផ្នែកនេះគ្របដណ្តប់អំពីគោលគំនិតមូលដ្ឋាននៃ OOP ក្នុង C#។
            </p>

            {/* 5.1 Classes and Objects */}
            <div id="classes-and-objects" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.1 Classes and Objects
              </h3>
              <p className="mt-2">
                Class គឺជាគ្រោងការណ៍សម្រាប់បង្កើត objects ខណៈពេល object គឺជា
                instance នៃ class។ Class មាន fields (ទិន្នន័យ) និង methods
                (អនុគមន៍)។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ class និង object៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Car {
    public string Model; // Field
    public void Drive() { // Method
        Console.WriteLine("Driving " + Model);
    }
}

Car myCar = new Car(); // Create an object
myCar.Model = "Toyota";
myCar.Drive(); // Output: Driving Toyota`}
              </SyntaxHighlighter>
            </div>

            {/* 5.2 Constructors and Destructors */}
            <div id="constructors-destructors" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.2 Constructors and Destructors
              </h3>
              <p className="mt-2">
                Constructor
                គឺជាអនុគមន៍ពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលបង្កើត object។
                Destructor ត្រូវបានហៅនៅពេល object ត្រូវបានបំផ្លាញ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ constructor និង destructor៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Car {
    public string Model;

    // Constructor
    public Car(string model) {
        Model = model;
        Console.WriteLine("Car created: " + Model);
    }

    // Destructor
    ~Car() {
        Console.WriteLine("Car destroyed: " + Model);
    }
}

Car myCar = new Car("Toyota"); // Output: Car created: Toyota`}
              </SyntaxHighlighter>
            </div>

            {/* 5.3 Encapsulation (Access Modifiers) */}
            <div id="encapsulation" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.3 Encapsulation (Access Modifiers)
              </h3>
              <p className="mt-2">
                Encapsulation
                គឺជាការលាក់ទិន្នន័យនិងអនុគមន៍ពីការចូលប្រើពីខាងក្រៅ។ C# ប្រើ
                access modifiers ដូចជា <code>public</code>, <code>private</code>
                , <code>protected</code>, និង <code>internal</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ encapsulation៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Car {
    private string Model; // Private field

    public void SetModel(string model) { // Public method
        Model = model;
    }

    public string GetModel() { // Public method
        return Model;
    }
}

Car myCar = new Car();
myCar.SetModel("Toyota");
Console.WriteLine(myCar.GetModel()); // Output: Toyota`}
              </SyntaxHighlighter>
            </div>

            {/* 5.4 Properties and Auto-Properties */}
            <div id="properties-auto-properties" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.4 Properties and Auto-Properties
              </h3>
              <p className="mt-2">
                Properties គឺជាវិធីដើម្បីចូលប្រើ fields ដោយប្រើ getter និង
                setter។ Auto-properties ធ្វើឱ្យការកំណត់ properties
                កាន់តែងាយស្រួល។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ properties និង auto-properties៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Car {
    // Auto-property
    public string Model { get; set; }

    // Property with custom logic
    private int _year;
    public int Year {
        get { return _year; }
        set { _year = value > 2000 ? value : 2000; }
    }
}

Car myCar = new Car();
myCar.Model = "Toyota";
myCar.Year = 1995;
Console.WriteLine(myCar.Year); // Output: 2000`}
              </SyntaxHighlighter>
            </div>

            {/* 5.5 Static Members */}
            <div id="static-members" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.5 Static Members
              </h3>
              <p className="mt-2">
                Static members ជាកម្មសិទ្ធិរបស់ class ជាជាង instance។
                ពួកវាអាចត្រូវបានចូលប្រើដោយផ្ទាល់តាមរយៈ class។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ static members៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Car {
    public static int TotalCars = 0;

    public Car() {
        TotalCars++;
    }
}

Car myCar1 = new Car();
Car myCar2 = new Car();
Console.WriteLine(Car.TotalCars); // Output: 2`}
              </SyntaxHighlighter>
            </div>

            {/* 5.6 Inheritance (base and derived classes) */}
            <div id="inheritance" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.6 Inheritance (base and derived classes)
              </h3>
              <p className="mt-2">
                Inheritance អនុញ្ញាតឱ្យ class មួយទទួលយក fields និង methods ពី
                class ផ្សេង។ Class ដែលទទួលយកគេហៅថា derived class ហើយ class
                ដែលត្រូវបានទទួលយកគេហៅថា base class។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ inheritance៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Vehicle { // Base class
    public string Brand = "Toyota";
}

class Car : Vehicle { // Derived class
    public void Drive() {
        Console.WriteLine("Driving " + Brand);
    }
}

Car myCar = new Car();
myCar.Drive(); // Output: Driving Toyota`}
              </SyntaxHighlighter>
            </div>

            {/* 5.7 Polymorphism (method overriding, abstract classes, virtual methods) */}
            <div id="polymorphism" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.7 Polymorphism (method overriding, abstract classes, virtual
                methods)
              </h3>
              <p className="mt-2">
                Polymorphism អនុញ្ញាតឱ្យ methods មានឥរិយាបទខុសៗគ្នានៅក្នុង
                derived classes។ វាអាចសម្រេចបានតាមរយៈ method overriding,
                abstract classes, និង virtual methods។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ polymorphism៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class Animal { // Base class
    public virtual void Sound() {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal { // Derived class
    public override void Sound() {
        Console.WriteLine("Bark");
    }
}

Animal myDog = new Dog();
myDog.Sound(); // Output: Bark`}
              </SyntaxHighlighter>
            </div>

            {/* 5.8 Interfaces */}
            <div id="interfaces" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.8 Interfaces
              </h3>
              <p className="mt-2">
                Interface គឺជាកិច្ចសន្យាដែលកំណត់អំពីអ្វីដែល class ត្រូវអនុវត្ត។
                វាមិនមាន implementation នោះទេ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ interface៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`interface IDriveable {
    void Drive();
}

class Car : IDriveable {
    public void Drive() {
        Console.WriteLine("Driving car");
    }
}

IDriveable myCar = new Car();
myCar.Drive(); // Output: Driving car`}
              </SyntaxHighlighter>
            </div>

            {/* 5.9 Sealed and Partial Classes */}
            <div id="sealed-partial-classes" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                5.9 Sealed and Partial Classes
              </h3>
              <p className="mt-2">
                Sealed class គឺជា class ដែលមិនអាចទទួលយកបាន។ Partial class
                អនុញ្ញាតឱ្យអ្នកបែងចែកការកំណត់ class ទៅជាឯកសារច្រើន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ sealed និង partial classes៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Sealed class
sealed class Animal {
    public void Sound() {
        Console.WriteLine("Animal sound");
    }
}

// Partial class
partial class Car {
    public void Drive() {
        Console.WriteLine("Driving");
    }
}

partial class Car {
    public void Stop() {
        Console.WriteLine("Stopping");
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="exception-handling" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              6. Exception Handling
            </h2>
            <p className="mt-4 text-lg">
              Exception handling
              គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងកំហុសដែលកើតឡើងក្នុងកម្មវិធីដោយមិនធ្វើឱ្យកម្មវិធីរត់ប៉ះ។
              C# ផ្តល់នូវឧបករណ៍ដូចជា <code>try-catch-finally</code> និងការបង្កើត
              exceptions ផ្ទាល់ខ្លួន។
            </p>

            {/* 6.1 Try-Catch-Finally Blocks */}
            <div id="try-catch-finally" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                6.1 Try-Catch-Finally Blocks
              </h3>
              <p className="mt-2">
                <code>try-catch-finally</code> គឺជារចនាសម្ព័ន្ធសម្រាប់ចាប់យក
                exceptions។ កូដនៅក្នុង <code>try</code> block ត្រូវបានអនុវត្ត
                ហើយប្រសិនបើមាន exception វានឹងត្រូវបានចាប់យកដោយ{" "}
                <code>catch</code> block។ <code>finally</code> block
                ត្រូវបានអនុវត្តរៀងរាល់ពេល។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ try-catch-finally៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`try {
    int result = 10 / 0; // This will throw an exception
} catch (DivideByZeroException ex) {
    Console.WriteLine("Error: " + ex.Message);
} finally {
    Console.WriteLine("This will always execute.");
}`}
              </SyntaxHighlighter>
            </div>

            {/* 6.2 Throwing Exceptions */}
            <div id="throwing-exceptions" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                6.2 Throwing Exceptions
              </h3>
              <p className="mt-2">
                អ្នកអាចបង្កើតនិងបោះ exceptions ដោយប្រើ keyword{" "}
                <code>throw</code>។
                វាមានប្រយោជន៍នៅពេលអ្នកចង់រាយការណ៍អំពីកំហុសផ្ទាល់ខ្លួន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការបោះ exception៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int age = -5;
if (age < 0) {
    throw new ArgumentException("Age cannot be negative.");
}`}
              </SyntaxHighlighter>
            </div>

            {/* 6.3 Custom Exceptions */}
            <div id="custom-exceptions" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                6.3 Custom Exceptions
              </h3>
              <p className="mt-2">
                អ្នកអាចបង្កើត exceptions ផ្ទាល់ខ្លួនដោយសរសេរ class
                ថ្មីដែលទាញយកពី <code>Exception</code> class។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ custom exception៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`class NegativeAgeException : Exception {
    public NegativeAgeException(string message) : base(message) {}
}

int age = -5;
if (age < 0) {
    throw new NegativeAgeException("Age cannot be negative.");
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div
            id="collections-data-structures"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              7. Collections and Data Structures
            </h2>
            <p className="mt-4 text-lg">
              Collections និង data structures គឺជាផ្នែកសំខាន់នៃការសរសេរកម្មវិធី
              C#។
              ពួកវាផ្តល់នូវវិធីដើម្បីរៀបចំនិងគ្រប់គ្រងទិន្នន័យយ៉ាងមានប្រសិទ្ធភាព។
              ផ្នែកនេះគ្របដណ្តប់អំពី arrays, lists, dictionaries, queues,
              stacks, និង sets។
            </p>

            {/* 7.1 Arrays (one-dimensional, multi-dimensional, jagged) */}
            <div id="arrays" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                7.1 Arrays (one-dimensional, multi-dimensional, jagged)
              </h3>
              <p className="mt-2">
                Arrays គឺជាបណ្តុំនៃធាតុដែលមានប្រភេទដូចគ្នា។ C# គាំទ្រការប្រើ
                arrays មួយវិមាត្រពហុវិមាត្រនិង jagged arrays។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ arrays៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// One-dimensional array
int[] numbers = { 1, 2, 3, 4, 5 };

// Multi-dimensional array
int[,] matrix = { { 1, 2 }, { 3, 4 } };

// Jagged array
int[][] jaggedArray = {
    new int[] { 1, 2 },
    new int[] { 3, 4, 5 }
};`}
              </SyntaxHighlighter>
            </div>

            {/* 7.2 Lists (List<T>) */}
            <div id="lists" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                7.2 Lists (List&lt;T&gt;)
              </h3>
              <p className="mt-2">
                Lists គឺជា collections ដែលអាចផ្លាស់ប្តូរទំហំបាន។
                ពួកវាផ្តល់នូវភាពងាយស្រួលក្នុងការបន្ថែមយកចេញនិងចូលប្រើធាតុ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ List៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`List<int> numbers = new List<int> { 1, 2, 3 };
numbers.Add(4); // Add an element
numbers.Remove(2); // Remove an element
Console.WriteLine(numbers[0]); // Access an element`}
              </SyntaxHighlighter>
            </div>

            {/* 7.3 Dictionaries (Dictionary<TKey, TValue>) */}
            <div id="dictionaries" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                7.3 Dictionaries (Dictionary&lt;TKey, TValue&gt;)
              </h3>
              <p className="mt-2">
                Dictionaries គឺជា collections ដែលផ្ទុក key-value pairs។
                ពួកវាអនុញ្ញាតឱ្យអ្នកចូលប្រើតម្លៃដោយប្រើ key។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ Dictionary៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`Dictionary<string, int> ages = new Dictionary<string, int>();
ages["John"] = 25; // Add a key-value pair
ages["Jane"] = 30;
Console.WriteLine(ages["John"]); // Access a value`}
              </SyntaxHighlighter>
            </div>

            {/* 7.4 Queues and Stacks */}
            <div id="queues-stacks" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                7.4 Queues and Stacks
              </h3>
              <p className="mt-2">
                Queues និង stacks គឺជា collections ដែលធ្វើការតាមគោលការណ៍ FIFO
                (First-In-First-Out) និង LIFO (Last-In-First-Out)។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ Queue និង Stack៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Queue
Queue<int> queue = new Queue<int>();
queue.Enqueue(1); // Add to the queue
queue.Enqueue(2);
Console.WriteLine(queue.Dequeue()); // Remove from the queue

// Stack
Stack<int> stack = new Stack<int>();
stack.Push(1); // Add to the stack
stack.Push(2);
Console.WriteLine(stack.Pop()); // Remove from the stack`}
              </SyntaxHighlighter>
            </div>

            {/* 7.5 HashSet and SortedSet */}
            <div id="hashset-sortedset" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                7.5 HashSet and SortedSet
              </h3>
              <p className="mt-2">
                HashSet និង SortedSet គឺជា collections
                ដែលមិនអនុញ្ញាតឱ្យមានធាតុស្ទួន។ SortedSet រក្សាធាតុតាមលំដាប់។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ HashSet និង SortedSet៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// HashSet
HashSet<int> hashSet = new HashSet<int> { 1, 2, 3 };
hashSet.Add(2); // Duplicate, will not be added

// SortedSet
SortedSet<int> sortedSet = new SortedSet<int> { 3, 1, 2 };
foreach (int num in sortedSet) {
    Console.WriteLine(num); // Output: 1, 2, 3
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div
            id="file-handling-streams"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              8. File Handling and Streams
            </h2>
            <p className="mt-4 text-lg">
              File handling និង streams គឺជាផ្នែកសំខាន់នៃការសរសេរកម្មវិធី C#។
              ពួកវាអនុញ្ញាតឱ្យអ្នកអាននិងសរសេរទិន្នន័យទៅកាន់ឯកសារ JSON និង CSV។
              ផ្នែកនេះគ្របដណ្តប់អំពីការប្រើ <code>File</code>,{" "}
              <code>StreamReader</code>, <code>StreamWriter</code>, និង{" "}
              <code>System.Text.Json</code>។
            </p>

            {/* 8.1 Reading and Writing Files (File, StreamReader, StreamWriter) */}
            <div id="reading-writing-files" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                8.1 Reading and Writing Files (File, StreamReader, StreamWriter)
              </h3>
              <p className="mt-2">
                C# ផ្តល់នូវវិធីជាច្រើនដើម្បីអាននិងសរសេរទិន្នន័យទៅកាន់ឯកសារ។
                អ្នកអាចប្រើ <code>File</code> class សម្រាប់ប្រតិបត្តិការសាមញ្ញ ឬ{" "}
                <code>StreamReader</code> និង <code>StreamWriter</code>{" "}
                សម្រាប់ការគ្រប់គ្រងលម្អិតបន្ថែម។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការសរសេរនិងអានឯកសារ៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Writing to a file
string filePath = "example.txt";
File.WriteAllText(filePath, "Hello, World!");

// Reading from a file
string content = File.ReadAllText(filePath);
Console.WriteLine(content); // Output: Hello, World!

// Using StreamReader and StreamWriter
using (StreamWriter writer = new StreamWriter(filePath)) {
    writer.WriteLine("This is a new line.");
}

using (StreamReader reader = new StreamReader(filePath)) {
    string line = reader.ReadLine();
    Console.WriteLine(line); // Output: This is a new line.
}`}
              </SyntaxHighlighter>
            </div>

            {/* 8.2 Working with JSON (System.Text.Json) */}
            <div id="working-with-json" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                8.2 Working with JSON (System.Text.Json)
              </h3>
              <p className="mt-2">
                JSON (JavaScript Object Notation)
                គឺជាទ្រង់ទ្រាយទិន្នន័យដែលគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ការផ្លាស់ប្តូរទិន្នន័យ។
                C# ផ្តល់នូវ <code>System.Text.Json</code> សម្រាប់ការបំលែង
                objects ទៅជា JSON និងច្រាសមកវិញ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការប្រើ JSON៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Text.Json;

// Serialize object to JSON
var person = new { Name = "John", Age = 30 };
string json = JsonSerializer.Serialize(person);
Console.WriteLine(json); // Output: {"Name":"John","Age":30}

// Deserialize JSON to object
var deserializedPerson = JsonSerializer.Deserialize<Person>(json);
Console.WriteLine(deserializedPerson.Name); // Output: John`}
              </SyntaxHighlighter>
            </div>

            {/* 8.3 Handling CSV Files */}
            <div id="handling-csv-files" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                8.3 Handling CSV Files
              </h3>
              <p className="mt-2">
                CSV (Comma-Separated Values)
                គឺជាទ្រង់ទ្រាយឯកសារដែលគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ផ្ទុកទិន្នន័យតារាង។
                C# អនុញ្ញាតឱ្យអ្នកអាននិងសរសេរទិន្នន័យ CSV ដោយប្រើ{" "}
                <code>StreamReader</code> និង <code>StreamWriter</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការប្រើ CSV៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Writing to a CSV file
string csvPath = "data.csv";
using (StreamWriter writer = new StreamWriter(csvPath)) {
    writer.WriteLine("Name,Age");
    writer.WriteLine("John,30");
    writer.WriteLine("Jane,25");
}

// Reading from a CSV file
using (StreamReader reader = new StreamReader(csvPath)) {
    string line;
    while ((line = reader.ReadLine()) != null) {
        Console.WriteLine(line);
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="linq" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              9. LINQ (Language Integrated Query)
            </h2>
            <p className="mt-4 text-lg">
              LINQ (Language Integrated Query) គឺជាផ្នែកមួយនៃ C#
              ដែលអនុញ្ញាតឱ្យអ្នកសរសេរសំណួរទៅកាន់ collections, databases,
              និងទិន្នន័យផ្សេងៗ។
              វាធ្វើឱ្យការងារជាមួយទិន្នន័យកាន់តែងាយស្រួលនិងអានបាន។
            </p>

            {/* 9.1 Introduction to LINQ */}
            <div id="introduction-to-linq" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                9.1 Introduction to LINQ
              </h3>
              <p className="mt-2">
                LINQ ផ្តល់នូវវិធីសាមញ្ញនិងអានបានដើម្បីសរសេរសំណួរទៅកាន់ទិន្នន័យ។
                វាគាំទ្រទិន្នន័យប្រភេទផ្សេងៗដូចជា collections, arrays, XML, និង
                databases។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ LINQ៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`int[] numbers = { 1, 2, 3, 4, 5 };
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;

foreach (var num in evenNumbers) {
    Console.WriteLine(num); // Output: 2, 4
}`}
              </SyntaxHighlighter>
            </div>

            {/* 9.2 LINQ Queries (Where, Select, OrderBy) */}
            <div id="linq-queries" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                9.2 LINQ Queries (Where, Select, OrderBy)
              </h3>
              <p className="mt-2">
                LINQ queries អនុញ្ញាតឱ្យអ្នកច្រាស់ទិន្នន័យដោយប្រើ methods ដូចជា{" "}
                <code>Where</code>, <code>Select</code>, និង{" "}
                <code>OrderBy</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ LINQ queries៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`var numbers = new List<int> { 5, 3, 1, 4, 2 };

// Filtering with Where
var filteredNumbers = numbers.Where(n => n > 2);

// Projection with Select
var squaredNumbers = numbers.Select(n => n * n);

// Sorting with OrderBy
var sortedNumbers = numbers.OrderBy(n => n);

Console.WriteLine(string.Join(", ", sortedNumbers)); // Output: 1, 2, 3, 4, 5`}
              </SyntaxHighlighter>
            </div>

            {/* 9.3 LINQ with Collections */}
            <div id="linq-with-collections" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                9.3 LINQ with Collections
              </h3>
              <p className="mt-2">
                LINQ អាចត្រូវបានប្រើជាមួយ collections ដូចជា{" "}
                <code>List&lt;T&gt;</code>,{" "}
                <code>Dictionary&lt;TKey, TValue&gt;</code>, និង{" "}
                <code>HashSet&lt;T&gt;</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ LINQ with collections៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`var students = new List<Student> {
    new Student { Name = "John", Age = 20 },
    new Student { Name = "Jane", Age = 22 },
    new Student { Name = "Alice", Age = 21 }
};

var query = from student in students
            where student.Age > 20
            orderby student.Name
            select student;

foreach (var student in query) {
    Console.WriteLine(student.Name); // Output: Alice, Jane
}`}
              </SyntaxHighlighter>
            </div>

            {/* 9.4 LINQ with Databases (Entity Framework) */}
            <div id="linq-with-databases" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                9.4 LINQ with Databases (Entity Framework)
              </h3>
              <p className="mt-2">
                LINQ អាចត្រូវបានប្រើជាមួយ databases តាមរយៈ Entity Framework។
                វាអនុញ្ញាតឱ្យអ្នកសរសេរសំណួរទៅកាន់ database ដោយប្រើ syntax
                ដូចគ្នានឹង LINQ with collections។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ LINQ with Entity Framework៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using (var context = new SchoolContext()) {
    var students = from student in context.Students
                   where student.Age > 20
                   orderby student.Name
                   select student;

    foreach (var student in students) {
        Console.WriteLine(student.Name);
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div
            id="delegates-events-lambda"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              10. Delegates, Events, and Lambda Expressions
            </h2>
            <p className="mt-4 text-lg">
              Delegates, events, និង lambda expressions គឺជាផ្នែកសំខាន់នៃ C#
              ដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការហៅអនុគមន៍ដោយប្រើវិធីដែលអាចបត់បែននិងអានបាន។
              ផ្នែកនេះគ្របដណ្តប់អំពី delegates, lambda expressions,
              និងការគ្រប់គ្រង events។
            </p>

            {/* 10.1 Delegates (Func, Action, Predicate) */}
            <div id="delegates" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                10.1 Delegates (Func, Action, Predicate)
              </h3>
              <p className="mt-2">
                Delegates គឺជាប្រភេទដែលតំណាងឱ្យអនុគមន៍។ C# ផ្តល់នូវ delegates
                ដូចជា <code>Func</code>, <code>Action</code>, និង{" "}
                <code>Predicate</code> សម្រាប់ការប្រើប្រាស់ទូទៅ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ delegates៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Func delegate (returns a value)
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(2, 3)); // Output: 5

// Action delegate (does not return a value)
Action<string> greet = name => Console.WriteLine("Hello, " + name);
greet("John"); // Output: Hello, John

// Predicate delegate (returns a boolean)
Predicate<int> isEven = num => num % 2 == 0;
Console.WriteLine(isEven(4)); // Output: True`}
              </SyntaxHighlighter>
            </div>

            {/* 10.2 Lambda Expressions */}
            <div id="lambda-expressions" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                10.2 Lambda Expressions
              </h3>
              <p className="mt-2">
                Lambda expressions
                គឺជាវិធីសង្ខេបដើម្បីសរសេរអនុគមន៍ដោយមិនចាំបាច់កំណត់ឈ្មោះ។
                ពួកវាត្រូវបានប្រើជាញឹកញាប់ជាមួយ delegates និង LINQ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ lambda expressions៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Lambda expression with Func delegate
Func<int, int> square = x => x * x;
Console.WriteLine(square(5)); // Output: 25

// Lambda expression with LINQ
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var evenNumbers = numbers.Where(n => n % 2 == 0);
Console.WriteLine(string.Join(", ", evenNumbers)); // Output: 2, 4`}
              </SyntaxHighlighter>
            </div>

            {/* 10.3 Events and Event Handling */}
            <div id="events-event-handling" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                10.3 Events and Event Handling
              </h3>
              <p className="mt-2">
                Events គឺជាវិធីដើម្បីធ្វើឱ្យ class អាចជូនដំណឹងទៅកាន់ class
                ផ្សេងៗនៅពេលដែលអ្វីមួយកើតឡើង។ Event handling
                គឺជាការគ្រប់គ្រងការឆ្លើយតបទៅនឹង events។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ events និង event handling៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Define a delegate for the event
public delegate void Notify();

// Define a class with an event
public class Process {
    public event Notify ProcessCompleted;

    public void StartProcess() {
        Console.WriteLine("Process started...");
        OnProcessCompleted();
    }

    protected virtual void OnProcessCompleted() {
        ProcessCompleted?.Invoke();
    }
}

// Subscribe to the event
Process process = new Process();
process.ProcessCompleted += () => Console.WriteLine("Process completed!");
process.StartProcess(); // Output: Process started... Process completed!`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="multithreading-async" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              11. Multithreading and Asynchronous Programming
            </h2>
            <p className="mt-4 text-lg">
              Multithreading និង asynchronous programming
              គឺជាបច្ចេកទេសសម្រាប់កែលម្អដំណើរការកម្មវិធីដោយអនុញ្ញាតឱ្យការងារច្រើនអាចដំណើរការក្នុងពេលដំណាលគ្នា។
              ផ្នែកនេះគ្របដណ្តប់អំពី threads, tasks, parallel programming, និង
              background workers។
            </p>

            {/* 11.1 Threads (Thread Class) */}
            <div id="threads" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                11.1 Threads (Thread Class)
              </h3>
              <p className="mt-2">
                Threads អនុញ្ញាតឱ្យអ្នកដំណើរការកូដជាច្រើនក្នុងពេលដំណាលគ្នា។
                អ្នកអាចប្រើ <code>Thread</code> class ដើម្បីបង្កើតនិងគ្រប់គ្រង
                threads។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ threads៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Threading;

void PrintNumbers() {
    for (int i = 1; i <= 5; i++) {
        Console.WriteLine(i);
        Thread.Sleep(500);
    }
}

Thread thread = new Thread(PrintNumbers);
thread.Start(); // Start the thread
thread.Join();  // Wait for the thread to finish`}
              </SyntaxHighlighter>
            </div>

            {/* 11.2 Task-Based Asynchronous Pattern (async and await) */}
            <div id="task-based-async" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                11.2 Task-Based Asynchronous Pattern (async and await)
              </h3>
              <p className="mt-2">
                Task-based asynchronous pattern (TAP)
                គឺជាវិធីសាមញ្ញនិងមានប្រសិទ្ធភាពដើម្បីដំណើរការកូដ asynchronous
                ដោយប្រើ <code>async</code> និង <code>await</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ async និង await៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`async Task<string> FetchDataAsync() {
    await Task.Delay(2000); // Simulate a delay
    return "Data fetched!";
}

async Task Main() {
    Console.WriteLine("Fetching data...");
    string result = await FetchDataAsync();
    Console.WriteLine(result); // Output: Data fetched!
}

Main().Wait();`}
              </SyntaxHighlighter>
            </div>

            {/* 11.3 Parallel Programming (Parallel.For, Parallel.ForEach) */}
            <div id="parallel-programming" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                11.3 Parallel Programming (Parallel.For, Parallel.ForEach)
              </h3>
              <p className="mt-2">
                Parallel programming
                អនុញ្ញាតឱ្យអ្នកដំណើរការកូដជាច្រើនក្នុងពេលដំណាលគ្នាដោយប្រើ{" "}
                <code>Parallel.For</code> និង <code>Parallel.ForEach</code>។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ parallel programming៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Threading.Tasks;

Parallel.For(0, 10, i => {
    Console.WriteLine($"Processing {i} on thread {Thread.CurrentThread.ManagedThreadId}");
});

var numbers = new List<int> { 1, 2, 3, 4, 5 };
Parallel.ForEach(numbers, num => {
    Console.WriteLine($"Processing {num} on thread {Thread.CurrentThread.ManagedThreadId}");
});`}
              </SyntaxHighlighter>
            </div>

            {/* 11.4 Background Workers */}
            <div id="background-workers" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                11.4 Background Workers
              </h3>
              <p className="mt-2">
                Background workers
                គឺជាវិធីដើម្បីដំណើរការកូដនៅក្នុងផ្ទៃខាងក្រោយដោយមិនរារាំង UI។
                អ្នកអាចប្រើ <code>BackgroundWorker</code> class
                ដើម្បីគ្រប់គ្រងការងារផ្ទៃខាងក្រោយ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ background workers៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.ComponentModel;

BackgroundWorker worker = new BackgroundWorker();
worker.DoWork += (sender, e) => {
    // Simulate a long-running task
    Thread.Sleep(2000);
    e.Result = "Task completed!";
};

worker.RunWorkerCompleted += (sender, e) => {
    Console.WriteLine(e.Result); // Output: Task completed!
};

worker.RunWorkerAsync();`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div
            id="working-with-databases"
            className="py-12 px-6 overflow-y-auto"
          >
            <h2 className="text-3xl font-semibold text-blue-600">
              12. Working with Databases in C#
            </h2>
            <p className="mt-4 text-lg">
              C# ផ្តល់នូវឧបករណ៍ដ៏រឹងមាំសម្រាប់ធ្វើការជាមួយ databases ដូចជា
              ADO.NET និង Entity Framework Core។
              ផ្នែកនេះគ្របដណ្តប់អំពីការភ្ជាប់ទៅកាន់ SQL Server, ការប្រើ SQL
              queries, និងការប្រើ Entity Framework Core។
            </p>

            {/* 12.1 ADO.NET Basics */}
            <div id="ado-net-basics" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                12.1 ADO.NET Basics
              </h3>
              <p className="mt-2">
                ADO.NET គឺជា framework សម្រាប់ធ្វើការជាមួយ databases នៅក្នុង C#។
                វាផ្តល់នូវ classes ដូចជា <code>SqlConnection</code>,{" "}
                <code>SqlCommand</code>, និង <code>SqlDataReader</code>{" "}
                សម្រាប់ការភ្ជាប់និងគ្រប់គ្រងទិន្នន័យ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ ADO.NET៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Data.SqlClient;

string connectionString = "YourConnectionStringHere";
using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    SqlCommand command = new SqlCommand("SELECT * FROM Customers", connection);
    SqlDataReader reader = command.ExecuteReader();
    while (reader.Read()) {
        Console.WriteLine(reader["CustomerName"]);
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 12.2 Connecting to SQL Server */}
            <div id="connecting-to-sql-server" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                12.2 Connecting to SQL Server
              </h3>
              <p className="mt-2">
                ដើម្បីភ្ជាប់ទៅកាន់ SQL Server អ្នកត្រូវប្រើ{" "}
                <code>SqlConnection</code> class ជាមួយ connection string។
                Connection string មានព័ត៌មានដូចជា server name, database name,
                និង credentials។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការភ្ជាប់ទៅកាន់ SQL Server៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`string connectionString = "Server=your_server;Database=your_db;User Id=your_user;Password=your_password;";
using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    Console.WriteLine("Connected to SQL Server!");
}`}
              </SyntaxHighlighter>
            </div>

            {/* 12.3 Executing SQL Queries with C# */}
            <div id="executing-sql-queries" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                12.3 Executing SQL Queries with C#
              </h3>
              <p className="mt-2">
                អ្នកអាចប្រើ <code>SqlCommand</code> ដើម្បីអនុវត្ត SQL queries
                និង stored procedures។ វាអនុញ្ញាតឱ្យអ្នកអាន, សរសេរ,
                និងធ្វើបច្ចុប្បន្នភាពទិន្នន័យនៅក្នុង database។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការអនុវត្ត SQL queries៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    SqlCommand command = new SqlCommand("INSERT INTO Customers (CustomerName) VALUES (@Name)", connection);
    command.Parameters.AddWithValue("@Name", "John Doe");
    int rowsAffected = command.ExecuteNonQuery();
    Console.WriteLine($"{rowsAffected} row(s) inserted.");
}`}
              </SyntaxHighlighter>
            </div>

            {/* 12.4 Entity Framework Core Basics */}
            <div id="entity-framework-core" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                12.4 Entity Framework Core Basics
              </h3>
              <p className="mt-2">
                Entity Framework Core (EF Core) គឺជា ORM (Object-Relational
                Mapper) ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយ databases ដោយប្រើ objects
                និង LINQ។ វាធ្វើឱ្យការងារជាមួយ databases កាន់តែងាយស្រួល។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ EF Core៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using Microsoft.EntityFrameworkCore;

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext {
    public DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlServer("YourConnectionStringHere");
    }
}

// Adding a customer
using (var context = new AppDbContext()) {
    var customer = new Customer { Name = "John Doe" };
    context.Customers.Add(customer);
    context.SaveChanges();
}

// Querying customers
using (var context = new AppDbContext()) {
    var customers = context.Customers.ToList();
    foreach (var c in customers) {
        Console.WriteLine(c.Name);
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="windows-forms-wpf" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              13. Windows Forms and WPF (GUI Development)
            </h2>
            <p className="mt-4 text-lg">
              Windows Forms និង WPF (Windows Presentation Foundation) គឺជា
              frameworks សម្រាប់ការអភិវឌ្ឍកម្មវិធី GUI (Graphical User
              Interface) នៅក្នុង C#។
              ផ្នែកនេះគ្របដណ្តប់អំពីការបង្កើតនិងគ្រប់គ្រងកម្មវិធី GUI ដោយប្រើ
              Windows Forms និង WPF។
            </p>

            {/* 13.1 Introduction to Windows Forms */}
            <div id="introduction-to-windows-forms" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                13.1 Introduction to Windows Forms
              </h3>
              <p className="mt-2">
                Windows Forms គឺជា framework សម្រាប់ការបង្កើតកម្មវិធី desktop
                ដែលមាន GUI។ វាផ្តល់នូវ controls ដូចជា buttons, labels,
                textboxes, និងផ្សេងៗទៀតសម្រាប់ការបង្កើតផ្ទាំងអ្នកប្រើប្រាស់។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការបង្កើត Windows Forms application៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Windows.Forms;

public class MainForm : Form {
    public MainForm() {
        this.Text = "My First Windows Form";
        this.Size = new System.Drawing.Size(300, 200);

        Button button = new Button();
        button.Text = "Click Me";
        button.Location = new System.Drawing.Point(100, 50);
        button.Click += (sender, e) => MessageBox.Show("Button clicked!");

        this.Controls.Add(button);
    }

    [STAThread]
    static void Main() {
        Application.Run(new MainForm());
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 13.2 Working with Controls (Buttons, Labels, Textboxes) */}
            <div id="working-with-controls" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                13.2 Working with Controls (Buttons, Labels, Textboxes)
              </h3>
              <p className="mt-2">
                Controls
                គឺជាធាតុដែលអ្នកប្រើប្រាស់អាចធ្វើអន្តរកម្មជាមួយនៅក្នុងកម្មវិធី
                GUI។ Windows Forms ផ្តល់នូវ controls ជាច្រើនដូចជា buttons,
                labels, textboxes, និងផ្សេងៗទៀត។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការប្រើ controls៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`Label label = new Label();
label.Text = "Enter your name:";
label.Location = new System.Drawing.Point(20, 20);

TextBox textBox = new TextBox();
textBox.Location = new System.Drawing.Point(20, 50);
textBox.Size = new System.Drawing.Size(200, 20);

Button button = new Button();
button.Text = "Submit";
button.Location = new System.Drawing.Point(20, 80);
button.Click += (sender, e) => MessageBox.Show("Hello, " + textBox.Text);

this.Controls.Add(label);
this.Controls.Add(textBox);
this.Controls.Add(button);`}
              </SyntaxHighlighter>
            </div>

            {/* 13.3 Event Handling in Windows Forms */}
            <div id="event-handling-windows-forms" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                13.3 Event Handling in Windows Forms
              </h3>
              <p className="mt-2">
                Event handling
                គឺជាការគ្រប់គ្រងការឆ្លើយតបទៅនឹងសកម្មភាពរបស់អ្នកប្រើប្រាស់ដូចជាការចុចប៊ូតុង។
                អ្នកអាចប្រើ event handlers ដើម្បីកំណត់អ្វីដែលត្រូវធ្វើនៅពេលដែល
                event កើតឡើង។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ event handling៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`Button button = new Button();
button.Text = "Click Me";
button.Location = new System.Drawing.Point(100, 50);
button.Click += (sender, e) => {
    MessageBox.Show("Button clicked!");
};

this.Controls.Add(button);`}
              </SyntaxHighlighter>
            </div>

            {/* 13.4 Introduction to WPF (Windows Presentation Foundation) */}
            <div id="introduction-to-wpf" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                13.4 Introduction to WPF (Windows Presentation Foundation)
              </h3>
              <p className="mt-2">
                WPF គឺជា framework ទំនើបសម្រាប់ការបង្កើតកម្មវិធី desktop ដែលមាន
                GUI។ វាផ្តល់នូវការគាំទ្រសម្រាប់ graphics, animations, និង data
                binding។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ WPF application៖</strong>
              </p>
              <SyntaxHighlighter language="xml" style={a11yDark}>
                {`<!-- MainWindow.xaml -->
<Window x:Class="WpfApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="My WPF App" Height="200" Width="300">
    <StackPanel>
        <Label Content="Enter your name:" />
        <TextBox x:Name="txtName" />
        <Button Content="Submit" Click="Button_Click" />
    </StackPanel>
</Window>`}
              </SyntaxHighlighter>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// MainWindow.xaml.cs
using System.Windows;

public partial class MainWindow : Window {
    public MainWindow() {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e) {
        MessageBox.Show("Hello, " + txtName.Text);
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="asp-net-core" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              14. ASP.NET Core (Web Development)
            </h2>
            <p className="mt-4 text-lg">
              ASP.NET Core គឺជា framework ទំនើបសម្រាប់ការអភិវឌ្ឍកម្មវិធី web និង
              web APIs។ វាគាំទ្រការអភិវឌ្ឍន៍ cross-platform និងមានដំណើរការលឿន។
              ផ្នែកនេះគ្របដណ្តប់អំពី MVC architecture, Web APIs, និងការគ្រប់គ្រង
              authentication និង authorization។
            </p>

            {/* 14.1 Introduction to ASP.NET Core */}
            <div id="introduction-to-asp-net-core" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                14.1 Introduction to ASP.NET Core
              </h3>
              <p className="mt-2">
                ASP.NET Core គឺជា framework សម្រាប់ការបង្កើតកម្មវិធី web និង web
                APIs ដែលអាចដំណើរការបានលើ Windows, macOS, និង Linux។
                វាត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យការអភិវឌ្ឍន៍ web
                កាន់តែមានប្រសិទ្ធភាពនិងអាចពង្រីកបាន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ ASP.NET Core project៖</strong>
              </p>
              <SyntaxHighlighter language="bash" style={a11yDark}>
                {`dotnet new webapi -o MyWebApi`}
              </SyntaxHighlighter>
            </div>

            {/* 14.2 MVC Architecture in ASP.NET */}
            <div id="mvc-architecture" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                14.2 MVC Architecture in ASP.NET
              </h3>
              <p className="mt-2">
                MVC (Model-View-Controller)
                គឺជារចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍកម្មវិធី web។
                វាបែងចែកកម្មវិធីជា 3 ផ្នែក៖ Model (ទិន្នន័យ), View
                (ផ្ទាំងអ្នកប្រើប្រាស់), និង Controller (ដែលគ្រប់គ្រងឡូជីខល)។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ MVC controller៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`public class HomeController : Controller {
    public IActionResult Index() {
        return View();
    }

    public IActionResult About() {
        ViewData["Message"] = "Your application description page.";
        return View();
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 14.3 Building a Web API with ASP.NET Core */}
            <div id="building-web-api" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                14.3 Building a Web API with ASP.NET Core
              </h3>
              <p className="mt-2">
                ASP.NET Core ផ្តល់នូវឧបករណ៍ដ៏រឹងមាំសម្រាប់ការបង្កើត Web APIs។
                Web APIs អនុញ្ញាតឱ្យអ្នកបង្កើត RESTful services
                ដែលអាចត្រូវបានប្រើដោយកម្មវិធីផ្សេងៗ។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ Web API controller៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    [HttpGet]
    public IEnumerable<string> Get() {
        return new string[] { "Product1", "Product2" };
    }

    [HttpGet("{id}")]
    public string Get(int id) {
        return $"Product {id}";
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 14.4 Authentication and Authorization */}
            <div id="authentication-authorization" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                14.4 Authentication and Authorization
              </h3>
              <p className="mt-2">
                Authentication គឺជាការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់
                ខណៈពេលដែល authorization
                គឺជាការកំណត់អ្វីដែលអ្នកប្រើប្រាស់អាចធ្វើបាន។ ASP.NET Core
                ផ្តល់នូវឧបករណ៍សម្រាប់ការគ្រប់គ្រង authentication និង
                authorization។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃការកំណត់ authentication៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`public void ConfigureServices(IServiceCollection services) {
    services.AddAuthentication("Bearer")
            .AddJwtBearer("Bearer", options => {
                options.Authority = "https://localhost:5001";
                options.Audience = "api1";
            });
}

public void Configure(IApplicationBuilder app) {
    app.UseAuthentication();
    app.UseAuthorization();
}`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="unit-testing" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              15. Unit Testing in C#
            </h2>
            <p className="mt-4 text-lg">
              Unit testing
              គឺជាវិធីសាស្រ្តសម្រាប់សាកល្បងកូដដោយបែងចែកវាជាផ្នែកតូចៗ។
              វាជួយធានាថាកូដដំណើរការត្រឹមត្រូវនិងអាចពង្រីកបាន។
              ផ្នែកនេះគ្របដណ្តប់អំពីការសរសេរ unit tests, mocking, និង
              test-driven development (TDD)។
            </p>

            {/* 15.1 Writing Unit Tests with MSTest and NUnit */}
            <div id="writing-unit-tests" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                15.1 Writing Unit Tests with MSTest and NUnit
              </h3>
              <p className="mt-2">
                MSTest និង NUnit គឺជា frameworks សម្រាប់សរសេរ unit tests នៅក្នុង
                C#។ ពួកវាផ្តល់នូវ attributes និង methods
                សម្រាប់ការកំណត់និងដំណើរការ tests។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ unit test ជាមួយ MSTest៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class MathTests {
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = a + b;

        // Assert
        Assert.AreEqual(8, result);
    }
}`}
              </SyntaxHighlighter>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ unit test ជាមួយ NUnit៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using NUnit.Framework;

[TestFixture]
public class MathTests {
    [Test]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = a + b;

        // Assert
        Assert.AreEqual(8, result);
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 15.2 Mocking with Moq */}
            <div id="mocking-with-moq" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                15.2 Mocking with Moq
              </h3>
              <p className="mt-2">
                Mocking គឺជាវិធីសាស្រ្តសម្រាប់បង្កើត objects ប្លែកដែលជំនួស
                dependencies នៅក្នុង unit tests។ Moq គឺជា library
                ដ៏ពេញនិយមសម្រាប់ mocking នៅក្នុង C#។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ mocking ជាមួយ Moq៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using Moq;

public interface ICalculator {
    int Add(int a, int b);
}

[TestClass]
public class CalculatorTests {
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        var mockCalculator = new Mock<ICalculator>();
        mockCalculator.Setup(x => x.Add(5, 3)).Returns(8);

        // Act
        int result = mockCalculator.Object.Add(5, 3);

        // Assert
        Assert.AreEqual(8, result);
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 15.3 Test-Driven Development (TDD) in C# */}
            <div id="test-driven-development" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                15.3 Test-Driven Development (TDD) in C#
              </h3>
              <p className="mt-2">
                Test-Driven Development (TDD)
                គឺជាវិធីសាស្រ្តសម្រាប់ការអភិវឌ្ឍកូដដោយសរសេរ tests
                មុនពេលសរសេរកូដដែលធ្វើឱ្យ tests ឆ្លង។ TDD
                ជួយធានាថាកូដមានគុណភាពខ្ពស់និងអាចពង្រីកបាន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ TDD៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Step 1: Write a failing test
[TestMethod]
public void Add_TwoNumbers_ReturnsSum() {
    // Arrange
    var calculator = new Calculator();

    // Act
    int result = calculator.Add(5, 3);

    // Assert
    Assert.AreEqual(8, result);
}

// Step 2: Write the minimal code to pass the test
public class Calculator {
    public int Add(int a, int b) {
        return a + b;
    }
}

// Step 3: Refactor the code (if necessary)`}
              </SyntaxHighlighter>
            </div>
          </div>

          <div id="advanced-csharp" className="py-12 px-6 overflow-y-auto">
            <h2 className="text-3xl font-semibold text-blue-600">
              16. Advanced C# Topics
            </h2>
            <p className="mt-4 text-lg">
              Advanced C# topics គឺជាផ្នែកដែលពង្រីកចំណេះដឹងរបស់អ្នកអំពី C#
              ដោយគ្របដណ្តប់អំពី reflection, attributes, dependency injection,
              design patterns, និង microservices។ ផ្នែកនេះជួយអ្នកក្លាយជា
              developer ដែលមានជំនាញខ្ពស់។
            </p>

            {/* 16.1 Reflection in C# */}
            <div id="reflection" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                16.1 Reflection in C#
              </h3>
              <p className="mt-2">
                Reflection គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអ្នកពិនិត្យនិងគ្រប់គ្រង
                metadata នៃ types, methods, properties, និង fields នៅ runtime។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ reflection៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`using System.Reflection;

Type type = typeof(string);
Console.WriteLine("Type Name: " + type.Name);

MethodInfo[] methods = type.GetMethods();
foreach (var method in methods) {
    Console.WriteLine("Method: " + method.Name);
}`}
              </SyntaxHighlighter>
            </div>

            {/* 16.2 Attributes and Annotations */}
            <div id="attributes-annotations" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                16.2 Attributes and Annotations
              </h3>
              <p className="mt-2">
                Attributes គឺជាវិធីដើម្បីបន្ថែម metadata ទៅកាន់ types, methods,
                properties, និង fields។ ពួកវាត្រូវបានប្រើជាញឹកញាប់ក្នុង
                serialization, validation, និង dependency injection។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ attributes៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`[Serializable]
public class Person {
    [Required]
    public string Name { get; set; }

    [Range(1, 100)]
    public int Age { get; set; }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 16.3 Dependency Injection (DI) */}
            <div id="dependency-injection" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                16.3 Dependency Injection (DI)
              </h3>
              <p className="mt-2">
                Dependency Injection (DI) គឺជាវិធីសាស្រ្តសម្រាប់ការគ្រប់គ្រង
                dependencies នៅក្នុងកម្មវិធី។
                វាជួយធ្វើឱ្យកូដកាន់តែអាចធ្វើតេស្តបាននិងអាចពង្រីកបាន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ dependency injection៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`public interface IMessageService {
    void SendMessage(string message);
}

public class EmailService : IMessageService {
    public void SendMessage(string message) {
        Console.WriteLine("Email sent: " + message);
    }
}

public class Notification {
    private readonly IMessageService _messageService;

    public Notification(IMessageService messageService) {
        _messageService = messageService;
    }

    public void Notify(string message) {
        _messageService.SendMessage(message);
    }
}

// Registering services in ASP.NET Core
public void ConfigureServices(IServiceCollection services) {
    services.AddTransient<IMessageService, EmailService>();
}`}
              </SyntaxHighlighter>
            </div>

            {/* 16.4 Design Patterns (Singleton, Factory, Observer) */}
            <div id="design-patterns" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                16.4 Design Patterns (Singleton, Factory, Observer)
              </h3>
              <p className="mt-2">
                Design patterns
                គឺជាដំណោះស្រាយដែលបានបង្កើតឡើងសម្រាប់បញ្ហាទូទៅនៅក្នុងការអភិវឌ្ឍកម្មវិធី។
                ពួកវាជួយធ្វើឱ្យកូដកាន់តែអាចរក្សាទុកបាននិងអាចពង្រីកបាន។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ design patterns៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`// Singleton Pattern
public class Singleton {
    private static Singleton _instance;
    private Singleton() {}

    public static Singleton Instance {
        get {
            if (_instance == null) {
                _instance = new Singleton();
            }
            return _instance;
        }
    }
}

// Factory Pattern
public interface IProduct {
    void Create();
}

public class ProductA : IProduct {
    public void Create() {
        Console.WriteLine("Product A created.");
    }
}

public class ProductB : IProduct {
    public void Create() {
        Console.WriteLine("Product B created.");
    }
}

public class ProductFactory {
    public IProduct CreateProduct(string type) {
        switch (type) {
            case "A": return new ProductA();
            case "B": return new ProductB();
            default: throw new ArgumentException("Invalid product type.");
        }
    }
}

// Observer Pattern
public class Subject {
    private List<IObserver> _observers = new List<IObserver>();

    public void Attach(IObserver observer) {
        _observers.Add(observer);
    }

    public void Notify() {
        foreach (var observer in _observers) {
            observer.Update();
        }
    }
}

public interface IObserver {
    void Update();
}

public class Observer : IObserver {
    public void Update() {
        Console.WriteLine("Observer updated.");
    }
}`}
              </SyntaxHighlighter>
            </div>

            {/* 16.5 Microservices with .NET */}
            <div id="microservices" className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-600">
                16.5 Microservices with .NET
              </h3>
              <p className="mt-2">
                Microservices
                គឺជារចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍកម្មវិធីដែលបែងចែកកម្មវិធីជាសេវាកម្មតូចៗដែលអាចដំណើរការដាច់ដោយឡែកពីគ្នា។
                .NET ផ្តល់នូវឧបករណ៍ដូចជា ASP.NET Core សម្រាប់ការបង្កើត
                microservices។
              </p>
              <p className="mt-2">
                <strong>ឧទាហរណ៍នៃ microservice៖</strong>
              </p>
              <SyntaxHighlighter language="csharp" style={a11yDark}>
                {`[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    [HttpGet]
    public IEnumerable<string> Get() {
        return new string[] { "Product1", "Product2" };
    }
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cpp_Programming;
