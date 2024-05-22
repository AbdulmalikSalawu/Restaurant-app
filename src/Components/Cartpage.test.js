import {render,fireEvent} from '@testing-library/react';
import CartPage from './CartPage';

describe(CartPage, () => {

    it("cartItems should be zero when the button is clicked", () => {
        const {getByTestId,getByRole} = render(<CartPage cartItems />) ;
        const clearCartBtn = getByRole("button", {name: "Remove All"});
        const cartValue1 = Number(getByTestId("cartitem").textContent);
        expect(cartValue1).toHaveLength(0);
        fireEvent.click(clearCartBtn);
    })
} )
// test('basic test', () => {
//     expect(true).toBe(true);
//   });

