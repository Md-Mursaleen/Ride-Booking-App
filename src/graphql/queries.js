export const getUser = `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCar = `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const ordersByUserId = `
  query OrdersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const ordersByCarIdAndCreatedAt = `
  query OrdersByCarIdAndCreatedAt(
    $carId: ID!
    $createdAt: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCarIdAndCreatedAt(
      carId: $carId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
