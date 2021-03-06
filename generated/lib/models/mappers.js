"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = {
    serializedName: "Order",
    type: {
        name: "Composite",
        className: "Order",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number"
                }
            },
            petId: {
                serializedName: "petId",
                type: {
                    name: "Number"
                }
            },
            quantity: {
                serializedName: "quantity",
                type: {
                    name: "Number"
                }
            },
            shipDate: {
                serializedName: "shipDate",
                type: {
                    name: "DateTime"
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            },
            complete: {
                serializedName: "complete",
                defaultValue: false,
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
exports.User = {
    serializedName: "User",
    type: {
        name: "Composite",
        className: "User",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number"
                }
            },
            username: {
                serializedName: "username",
                type: {
                    name: "String"
                }
            },
            firstName: {
                serializedName: "firstName",
                type: {
                    name: "String"
                }
            },
            lastName: {
                serializedName: "lastName",
                type: {
                    name: "String"
                }
            },
            email: {
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            password: {
                serializedName: "password",
                type: {
                    name: "String"
                }
            },
            phone: {
                serializedName: "phone",
                type: {
                    name: "String"
                }
            },
            userStatus: {
                serializedName: "userStatus",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
exports.Category = {
    serializedName: "Category",
    type: {
        name: "Composite",
        className: "Category",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Tag = {
    serializedName: "Tag",
    type: {
        name: "Composite",
        className: "Tag",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Pet = {
    serializedName: "Pet",
    type: {
        name: "Composite",
        className: "Pet",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number"
                }
            },
            category: {
                serializedName: "category",
                type: {
                    name: "Composite",
                    className: "Category"
                }
            },
            name: {
                required: true,
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            photoUrls: {
                required: true,
                serializedName: "photoUrls",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            tags: {
                serializedName: "tags",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Tag"
                        }
                    }
                }
            },
            status: {
                serializedName: "status",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.ApiResponse = {
    serializedName: "ApiResponse",
    type: {
        name: "Composite",
        className: "ApiResponse",
        modelProperties: {
            code: {
                serializedName: "code",
                type: {
                    name: "Number"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.LoginUserHeaders = {
    serializedName: "loginuser-headers",
    type: {
        name: "Composite",
        className: "LoginUserHeaders",
        modelProperties: {
            xRateLimit: {
                serializedName: "x-rate-limit",
                type: {
                    name: "Number"
                }
            },
            xExpiresAfter: {
                serializedName: "x-expires-after",
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map