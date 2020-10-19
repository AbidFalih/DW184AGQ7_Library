import React, { useContext } from "react";
import Library from "../Components/Library";
import SideMenu from "../Components/SideMenu";
import { useQuery } from "react-query";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";
import { BookContext } from "../Context/bookContext";

const MyLibrary = () => {
  const [state, _] = useContext(BookContext);

  const { isLoading, error, data } = useQuery("getBookmarkUser", () =>
    API.get(`/bookmark/${state.user.id}`)
  );
  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <div>
          <div className="d-flex justify-content-between my-3">
            <h3 className="fo-tnr">My Library</h3>
          </div>
          <div className="row mb-3">
            {data.data.bookmarksUser.bookmarkedBooks.map((book) => (
              <Library book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
