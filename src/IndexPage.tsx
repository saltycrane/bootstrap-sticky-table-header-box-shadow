import { range } from "lodash";
import { Container, Table } from "reactstrap";

export default function IndexPage() {
  return (
    <Container className="m-5 p-5">
      <Table bordered>
        <thead>
          <tr
            style={{
              backgroundColor: "gray",
              boxShadow: "10px 5px 5px blue",
              color: "white",
              position: "sticky",
              top: 0,
            }}
          >
            <th>#</th>
            <th
              style={
                {
                  // NOTE: putting the box-shadow here doesn't work
                  // boxShadow: "10px 5px 5px green",
                }
              }
            >
              First Name
            </th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {range(1, 100).map((index: number) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
