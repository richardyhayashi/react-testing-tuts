import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    );
}

describe("FollowersList", () => {
  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS");
  });

  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RUNNING ONCE AFTER ALL TESTS");
  });

  it('Should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    //screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('Should render multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});