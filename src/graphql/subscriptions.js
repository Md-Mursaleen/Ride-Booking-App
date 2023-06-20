export const onCreateUser = `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCar = `
  subscription OnCreateCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onCreateCar(filter: $filter, owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCar = `
  subscription OnUpdateCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onUpdateCar(filter: $filter, owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCar = `
  subscription OnDeleteCar(
    $filter: ModelSubscriptionCarFilterInput
    $owner: String
  ) {
    onDeleteCar(filter: $filter, owner: $owner) {
      id
      type
      latitude
      longitude
      heading
      orders {
        items {
          id
          createdAt
          type
          originLatitude
          originLongitude
          destinationLatitude
          destinationLongitude
          userId
          carId
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOrder = `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const onUpdateOrder = `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const onDeleteOrder = `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
      id
      createdAt
      type
      originLatitude
      originLongitude
      destinationLatitude
      destinationLongitude
      userId
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;
