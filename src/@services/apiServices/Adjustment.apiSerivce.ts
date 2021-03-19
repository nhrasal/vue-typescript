// import { Observable, Subject } from "rxjs";
import { WatsonApiInstance } from "../../@config/api.config";
import { AuthHeader } from "./auth.apiService";
export const AdjustmentService = {
  getAllByWithdrawalID: (withdrawalID:string)=>
    WatsonApiInstance.get(
      `withdrawal-adjustment?resellerWithdrawalHistory=${withdrawalID}`,
      {
        headers: AuthHeader(),
      }
    ),

  create: (newModelData:string) =>
    WatsonApiInstance.post("withdrawal-adjustment/", newModelData, {
      headers: AuthHeader(),
    }),
  getOne: (id:string) =>
    WatsonApiInstance.get("withdrawal-adjustment/" + id, {
      headers: AuthHeader(),
    }),
  deleteOne: (id:string) =>
    WatsonApiInstance.delete("withdrawal-adjustment/" + id, {
      headers: AuthHeader(),
    }),
  update: (editModelData:string, id:string) =>
    WatsonApiInstance.put(`withdrawal-adjustment/${id}`, editModelData, {
      headers: AuthHeader(),
    }),
};
