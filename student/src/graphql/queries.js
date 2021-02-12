/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFacultyByUsername = /* GraphQL */ `
  query GetFacultyByUsername($username: String!) {
    getFacultyByUsername(username: $username) {
      id
      facultyName
      regdNum
      username
      designation
      timetableSlot {
        items {
          id
          time
          subjectCode
          subjetName
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          day
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          conflink
          createdAt
          updatedAt
        }
        nextToken
      }
      department {
        id
        departmentName
        faculty {
          items {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      attendance {
        items {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const getStudentByUsername = /* GraphQL */ `
  query GetStudentByUsername($username: String!) {
    getStudentByUsername(username: $username) {
      id
      username
      name
      rollnum
      course
      class
      section
      classSection {
        id
        mockTests
        name
        strength
        subjects {
          items {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      marks {
        items {
          id
          type
          name
          subjectCode
          date
          maxMarks
          marksObtained
          exam {
            id
            name
            date
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          assignment {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      school {
        id
        schoolName
        type
        imageurl
        ftplink
        createdAt
        updatedAt
      }
      attendance {
        items {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const getSubjectByCode = /* GraphQL */ `
  query GetSubjectByCode($subjectCode: String!) {
    getSubjectByCode(subjectCode: $subjectCode) {
      id
      subjectCode
      subjectName
      totalClasses
      notice
      exams {
        items {
          id
          name
          date
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          uploadJSON
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      assignment {
        items {
          id
          name
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          uploadPDF
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          date
          notice
          createdAt
          updatedAt
        }
        nextToken
      }
      classSection {
        id
        mockTests
        name
        strength
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subjects {
          items {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      timetableSlots {
        items {
          id
          time
          subjectCode
          subjetName
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          day
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          conflink
          createdAt
          updatedAt
        }
        nextToken
      }
      attendance {
        id
        jan
        feb
        mar
        apr
        may
        jun
        jul
        aug
        sep
        oct
        nov
        dec
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        student {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        faculty {
          id
          facultyName
          regdNum
          username
          designation
          timetableSlot {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      username
      name
      rollnum
      course
      class
      section
      classSection {
        id
        mockTests
        name
        strength
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subjects {
          items {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      marks {
        items {
          id
          type
          name
          subjectCode
          date
          maxMarks
          marksObtained
          exam {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          assignment {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      school {
        id
        schoolName
        type
        imageurl
        ftplink
        classSection {
          items {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          items {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      attendance {
        items {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        rollnum
        course
        class
        section
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMarks = /* GraphQL */ `
  query GetMarks($id: ID!) {
    getMarks(id: $id) {
      id
      type
      name
      subjectCode
      date
      maxMarks
      marksObtained
      exam {
        id
        name
        date
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        uploadJSON
        timestamp
        createdAt
        updatedAt
      }
      assignment {
        id
        name
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        uploadPDF
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        date
        notice
        createdAt
        updatedAt
      }
      student {
        id
        username
        name
        rollnum
        course
        class
        section
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMarkss = /* GraphQL */ `
  query ListMarkss(
    $filter: ModelMarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        subjectCode
        date
        maxMarks
        marksObtained
        exam {
          id
          name
          date
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          uploadJSON
          timestamp
          createdAt
          updatedAt
        }
        assignment {
          id
          name
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          uploadPDF
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          date
          notice
          createdAt
          updatedAt
        }
        student {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClassSection = /* GraphQL */ `
  query GetClassSection($id: ID!) {
    getClassSection(id: $id) {
      id
      mockTests
      name
      strength
      students {
        items {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      school {
        id
        schoolName
        type
        imageurl
        ftplink
        classSection {
          items {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          items {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      subjects {
        items {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClassSections = /* GraphQL */ `
  query ListClassSections(
    $filter: ModelClassSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mockTests
        name
        strength
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subjects {
          items {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimetableSlot = /* GraphQL */ `
  query GetTimetableSlot($id: ID!) {
    getTimetableSlot(id: $id) {
      id
      time
      subjectCode
      subjetName
      faculty {
        id
        facultyName
        regdNum
        username
        designation
        timetableSlot {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          id
          departmentName
          faculty {
            items {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      day
      subject {
        id
        subjectCode
        subjectName
        totalClasses
        notice
        exams {
          items {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          nextToken
        }
        assignment {
          items {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          nextToken
        }
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        timetableSlots {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        attendance {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      conflink
      createdAt
      updatedAt
    }
  }
`;
export const listTimetableSlots = /* GraphQL */ `
  query ListTimetableSlots(
    $filter: ModelTimetableSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimetableSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        subjectCode
        subjetName
        faculty {
          id
          facultyName
          regdNum
          username
          designation
          timetableSlot {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        day
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        conflink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      schoolName
      type
      imageurl
      ftplink
      classSection {
        items {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      department {
        items {
          id
          departmentName
          faculty {
            items {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        schoolName
        type
        imageurl
        ftplink
        classSection {
          items {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          items {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
      id
      subjectCode
      subjectName
      totalClasses
      notice
      exams {
        items {
          id
          name
          date
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          uploadJSON
          timestamp
          createdAt
          updatedAt
        }
        nextToken
      }
      assignment {
        items {
          id
          name
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          uploadPDF
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          date
          notice
          createdAt
          updatedAt
        }
        nextToken
      }
      classSection {
        id
        mockTests
        name
        strength
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subjects {
          items {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      timetableSlots {
        items {
          id
          time
          subjectCode
          subjetName
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          day
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          conflink
          createdAt
          updatedAt
        }
        nextToken
      }
      attendance {
        id
        jan
        feb
        mar
        apr
        may
        jun
        jul
        aug
        sep
        oct
        nov
        dec
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        student {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        faculty {
          id
          facultyName
          regdNum
          username
          designation
          timetableSlot {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjectCode
        subjectName
        totalClasses
        notice
        exams {
          items {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          nextToken
        }
        assignment {
          items {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          nextToken
        }
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        timetableSlots {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        attendance {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFaculty = /* GraphQL */ `
  query GetFaculty($id: ID!) {
    getFaculty(id: $id) {
      id
      facultyName
      regdNum
      username
      designation
      timetableSlot {
        items {
          id
          time
          subjectCode
          subjetName
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          day
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          conflink
          createdAt
          updatedAt
        }
        nextToken
      }
      department {
        id
        departmentName
        faculty {
          items {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      attendance {
        items {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFacultys = /* GraphQL */ `
  query ListFacultys(
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacultys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        facultyName
        regdNum
        username
        designation
        timetableSlot {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          id
          departmentName
          faculty {
            items {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      departmentName
      faculty {
        items {
          id
          facultyName
          regdNum
          username
          designation
          timetableSlot {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      school {
        id
        schoolName
        type
        imageurl
        ftplink
        classSection {
          items {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          items {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        students {
          items {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        departmentName
        faculty {
          items {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      name
      date
      marks {
        items {
          id
          type
          name
          subjectCode
          date
          maxMarks
          marksObtained
          exam {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          assignment {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subject {
        id
        subjectCode
        subjectName
        totalClasses
        notice
        exams {
          items {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          nextToken
        }
        assignment {
          items {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          nextToken
        }
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        timetableSlots {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        attendance {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      uploadJSON
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        uploadJSON
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
      id
      name
      marks {
        items {
          id
          type
          name
          subjectCode
          date
          maxMarks
          marksObtained
          exam {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          assignment {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      uploadPDF
      subject {
        id
        subjectCode
        subjectName
        totalClasses
        notice
        exams {
          items {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          nextToken
        }
        assignment {
          items {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          nextToken
        }
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        timetableSlots {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        attendance {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      notice
      createdAt
      updatedAt
    }
  }
`;
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        uploadPDF
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        date
        notice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttendance = /* GraphQL */ `
  query GetAttendance($id: ID!) {
    getAttendance(id: $id) {
      id
      jan
      feb
      mar
      apr
      may
      jun
      jul
      aug
      sep
      oct
      nov
      dec
      subject {
        id
        subjectCode
        subjectName
        totalClasses
        notice
        exams {
          items {
            id
            name
            date
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            uploadJSON
            timestamp
            createdAt
            updatedAt
          }
          nextToken
        }
        assignment {
          items {
            id
            name
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            uploadPDF
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            date
            notice
            createdAt
            updatedAt
          }
          nextToken
        }
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        timetableSlots {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        attendance {
          id
          jan
          feb
          mar
          apr
          may
          jun
          jul
          aug
          sep
          oct
          nov
          dec
          subject {
            id
            subjectCode
            subjectName
            totalClasses
            notice
            exams {
              items {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              nextToken
            }
            assignment {
              items {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              nextToken
            }
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            timetableSlots {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            attendance {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          student {
            id
            username
            name
            rollnum
            course
            class
            section
            classSection {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            marks {
              items {
                id
                type
                name
                subjectCode
                date
                maxMarks
                marksObtained
                exam {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                assignment {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          faculty {
            id
            facultyName
            regdNum
            username
            designation
            timetableSlot {
              items {
                id
                time
                subjectCode
                subjetName
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                day
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                conflink
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            attendance {
              items {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      student {
        id
        username
        name
        rollnum
        course
        class
        section
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      faculty {
        id
        facultyName
        regdNum
        username
        designation
        timetableSlot {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          id
          departmentName
          faculty {
            items {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAttendances = /* GraphQL */ `
  query ListAttendances(
    $filter: ModelAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        jan
        feb
        mar
        apr
        may
        jun
        jul
        aug
        sep
        oct
        nov
        dec
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        student {
          id
          username
          name
          rollnum
          course
          class
          section
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          marks {
            items {
              id
              type
              name
              subjectCode
              date
              maxMarks
              marksObtained
              exam {
                id
                name
                date
                marks {
                  nextToken
                }
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                uploadJSON
                timestamp
                createdAt
                updatedAt
              }
              assignment {
                id
                name
                marks {
                  nextToken
                }
                uploadPDF
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                date
                notice
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        faculty {
          id
          facultyName
          regdNum
          username
          designation
          timetableSlot {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            id
            departmentName
            faculty {
              items {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          attendance {
            items {
              id
              jan
              feb
              mar
              apr
              may
              jun
              jul
              aug
              sep
              oct
              nov
              dec
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              student {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const studget = /* GraphQL */ `
  query Studget(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studget(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        name
        rollnum
        course
        class
        section
        classSection {
          id
          mockTests
          name
          strength
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          subjects {
            items {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        school {
          id
          schoolName
          type
          imageurl
          ftplink
          classSection {
            items {
              id
              mockTests
              name
              strength
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              subjects {
                items {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          department {
            items {
              id
              departmentName
              faculty {
                items {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          students {
            items {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const facget = /* GraphQL */ `
  query Facget(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    facget(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        facultyName
        regdNum
        username
        designation
        timetableSlot {
          items {
            id
            time
            subjectCode
            subjetName
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            day
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            conflink
            createdAt
            updatedAt
          }
          nextToken
        }
        department {
          id
          departmentName
          faculty {
            items {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          school {
            id
            schoolName
            type
            imageurl
            ftplink
            classSection {
              items {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            department {
              items {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        attendance {
          items {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const exambynames = /* GraphQL */ `
  query Exambynames(
    $timestamp: AWSTimestamp
    $sortDirection: ModelSortDirection
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exambynames(
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        date
        marks {
          items {
            id
            type
            name
            subjectCode
            date
            maxMarks
            marksObtained
            exam {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            assignment {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subject {
          id
          subjectCode
          subjectName
          totalClasses
          notice
          exams {
            items {
              id
              name
              date
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              uploadJSON
              timestamp
              createdAt
              updatedAt
            }
            nextToken
          }
          assignment {
            items {
              id
              name
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              uploadPDF
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              date
              notice
              createdAt
              updatedAt
            }
            nextToken
          }
          classSection {
            id
            mockTests
            name
            strength
            students {
              items {
                id
                username
                name
                rollnum
                course
                class
                section
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                marks {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            school {
              id
              schoolName
              type
              imageurl
              ftplink
              classSection {
                items {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                items {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                nextToken
              }
              students {
                items {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            subjects {
              items {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          timetableSlots {
            items {
              id
              time
              subjectCode
              subjetName
              faculty {
                id
                facultyName
                regdNum
                username
                designation
                timetableSlot {
                  nextToken
                }
                department {
                  id
                  departmentName
                  createdAt
                  updatedAt
                }
                attendance {
                  nextToken
                }
                createdAt
                updatedAt
              }
              day
              subject {
                id
                subjectCode
                subjectName
                totalClasses
                notice
                exams {
                  nextToken
                }
                assignment {
                  nextToken
                }
                classSection {
                  id
                  mockTests
                  name
                  strength
                  createdAt
                  updatedAt
                }
                timetableSlots {
                  nextToken
                }
                attendance {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              conflink
              createdAt
              updatedAt
            }
            nextToken
          }
          attendance {
            id
            jan
            feb
            mar
            apr
            may
            jun
            jul
            aug
            sep
            oct
            nov
            dec
            subject {
              id
              subjectCode
              subjectName
              totalClasses
              notice
              exams {
                items {
                  id
                  name
                  date
                  uploadJSON
                  timestamp
                  createdAt
                  updatedAt
                }
                nextToken
              }
              assignment {
                items {
                  id
                  name
                  uploadPDF
                  date
                  notice
                  createdAt
                  updatedAt
                }
                nextToken
              }
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              timetableSlots {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              attendance {
                id
                jan
                feb
                mar
                apr
                may
                jun
                jul
                aug
                sep
                oct
                nov
                dec
                subject {
                  id
                  subjectCode
                  subjectName
                  totalClasses
                  notice
                  createdAt
                  updatedAt
                }
                student {
                  id
                  username
                  name
                  rollnum
                  course
                  class
                  section
                  createdAt
                  updatedAt
                }
                faculty {
                  id
                  facultyName
                  regdNum
                  username
                  designation
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            student {
              id
              username
              name
              rollnum
              course
              class
              section
              classSection {
                id
                mockTests
                name
                strength
                students {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                subjects {
                  nextToken
                }
                createdAt
                updatedAt
              }
              marks {
                items {
                  id
                  type
                  name
                  subjectCode
                  date
                  maxMarks
                  marksObtained
                  createdAt
                  updatedAt
                }
                nextToken
              }
              school {
                id
                schoolName
                type
                imageurl
                ftplink
                classSection {
                  nextToken
                }
                department {
                  nextToken
                }
                students {
                  nextToken
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            faculty {
              id
              facultyName
              regdNum
              username
              designation
              timetableSlot {
                items {
                  id
                  time
                  subjectCode
                  subjetName
                  day
                  conflink
                  createdAt
                  updatedAt
                }
                nextToken
              }
              department {
                id
                departmentName
                faculty {
                  nextToken
                }
                school {
                  id
                  schoolName
                  type
                  imageurl
                  ftplink
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              attendance {
                items {
                  id
                  jan
                  feb
                  mar
                  apr
                  may
                  jun
                  jul
                  aug
                  sep
                  oct
                  nov
                  dec
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        uploadJSON
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
