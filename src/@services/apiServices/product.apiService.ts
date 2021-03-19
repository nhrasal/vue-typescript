import { WatsonApiInstance } from "./../../@config/api.config";
import { AuthHeader } from "./auth.apiService";

export interface IProductGetAllApiOptions {
  id?: string;
  take?: any;
  page?: number;
  searchTerm?: string;
  supplier?: string;
  brand?: string;
  department?: string;
  category?: string;
  subCategory?: string;
}

const headers = AuthHeader();
export const ProductService = {
  getAll: (option: IProductGetAllApiOptions) =>
    WatsonApiInstance.get(
      `products?supplier=${option.supplier || ""}&brand=${option.brand ||
        ""}&department=${option.department || ""}&category=${option.category ||
        ""}&subCategory=${option.subCategory || ""}&page=${option.page}&take=${
        option.take
      }&searchTerm=${option.searchTerm || ""}`,
      { headers: AuthHeader() }
    ),

  create: (newModelData: any) =>
    WatsonApiInstance.post("products/create-product", newModelData, {
      headers,
    }),

  getOne: (id: any) =>
    WatsonApiInstance.get("products/" + id, { headers: AuthHeader() }),

  getVariantOptionsOne: (id: any) =>
    WatsonApiInstance.get("variantOptions/" + id, { headers: AuthHeader() }),

  deleteOne: (id: any) =>
    WatsonApiInstance.delete("products/" + id, { headers: AuthHeader() }),

  update: (editModelData: any, id: any) =>
    WatsonApiInstance.put(`products/${id}`, editModelData, {
      headers: AuthHeader(),
    }),

  deleteImageOne: (id: any) =>
    WatsonApiInstance.delete("productImages/" + id, { headers: AuthHeader() }),
  deleteVariantOptionsOne: (id: any) =>
    WatsonApiInstance.delete("variantOptions/" + id, { headers: AuthHeader() }),
  productImageCreate: (newModelData: any) =>
    WatsonApiInstance.post("productImages", newModelData, {
      headers: AuthHeader(),
    }),

  variantOptions: (newModelData: any) =>
    WatsonApiInstance.post("variantOptions", newModelData, {
      headers: AuthHeader(),
    }),
};
