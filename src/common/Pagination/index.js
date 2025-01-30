import { useDispatch } from "react-redux";
import { setCurrentPage } from "./paginationSlice.js";
import { useTotalPages } from "./useTotalPages.js";
import {
  Wrapper,
  ButtonWrapper,
  Button,
  PrimaryArrow,
  SecondaryArrow,
  ButtonText,
  TextWrapper,
  PageLabel,
  PageNumber,
} from "./styled.js";
import { theme } from "../../theme.js";
import { startFetch } from "../../features/Movies/movieSlice.js";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect } from "react";

const PaginationButton = ({ onClick, disabled, children, direction }) => (
  <Button disabled={disabled} onClick={onClick}>
    {direction === "left" && (
      <>
        <PrimaryArrow $disabled={disabled} direction={direction} />
        {children === "First" ? (
          <SecondaryArrow $disabled={disabled} direction={direction} />
        ) : (
          ""
        )}
      </>
    )}
    <ButtonText $disabled={disabled}>{children}</ButtonText>
    {direction === "right" && (
      <>
        <PrimaryArrow $disabled={disabled} direction={direction} />
        {children === "Last" ? (
          <SecondaryArrow $disabled={disabled} direction={direction} />
        ) : (
          ""
        )}
      </>
    )}
  </Button>
);

export const Pagination = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const totalPages = useTotalPages();
  const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;

  const isMobile = window.innerWidth <= theme.breakpoint.mobileMax;

  const handleSetCurrentPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      history.push(`${location.pathname}?page=${page}`);
      dispatch(setCurrentPage(page));
      dispatch(startFetch());
    }
  };

  useEffect(() => {
    dispatch(setCurrentPage(currentPage));
    dispatch(startFetch());
  }, [location.search, dispatch, currentPage]);

  return (
    <Wrapper>
      <ButtonWrapper>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => handleSetCurrentPage(1)}
          direction="left"
          isMobile={isMobile}
        >
          First
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => handleSetCurrentPage(currentPage - 1)}
          direction="left"
          isMobile={isMobile}
        >
          Previous
        </PaginationButton>
      </ButtonWrapper>
      <TextWrapper>
        <PageLabel>Page</PageLabel>
        <PageNumber>{currentPage}</PageNumber>
        <PageLabel>of</PageLabel>
        <PageNumber>{totalPages}</PageNumber>
      </TextWrapper>
      <ButtonWrapper>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => handleSetCurrentPage(currentPage + 1)}
          direction="right"
          isMobile={isMobile}
        >
          Next
        </PaginationButton>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => handleSetCurrentPage(totalPages)}
          direction="right"
          isMobile={isMobile}
        >
          Last
        </PaginationButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
