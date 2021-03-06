import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({
  cartItem, clearItem, addItemAction, removeItemAction,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="itemImage" />
      </ImageContainer>
      <TextContainer className="name">{name}</TextContainer>
      <QuantityContainer className="quantity">
        <div
          role="button"
          tabIndex="0 "
          className="arrow"
          onClick={() => removeItemAction(cartItem)}
          onKeyPress={() => removeItemAction(cartItem)}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          role="button"
          tabIndex="0"
          className="arrow"
          onClick={() => addItemAction(cartItem)}
          onKeyPress={() => addItemAction(cartItem)}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        role="button"
        tabIndex="0"
        className="remove-button"
        onClick={() => clearItem(cartItem)}
        onKeyPress={() => clearItem(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  clearItem: PropTypes.func.isRequired,
  addItemAction: PropTypes.func.isRequired,
  removeItemAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItemAction: (item) => dispatch(addItem(item)),
  removeItemAction: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
