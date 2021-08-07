import React from "react";
import { navigate, Link } from "@reach/router";
import DeleteButton from "./DeleteButton";

const AuthList = (props) => {
  const { deleteAuthor, authors } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <h4>Author</h4>
            </th>
            <th>
              <h4>Actions availabe</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {authors
            .sort((auth, index) =>
              auth.name.toLowerCase() > index.name.toLowerCase() ? 1 : -1
            )
            .map((author, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <Link to={`/${author._id}`}>
                      <p>{author.name}</p>
                    </Link>
                  </td>
                  <td>
                    <button onClick={(e) => navigate("/edit/"+ author._id)}>
                      Edit
                    </button>
                    <DeleteButton
                      authorId={author._id}
                      successCallback={() => deleteAuthor(author._id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AuthList;
