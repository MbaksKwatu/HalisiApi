import { createSlice } from "@reduxjs/toolkit";
import * as actions from './sliceActions';


// const storedUser = localStorage.getItem("user");
const initialState = {
    loading:false,
    // user: storedUser ? JSON.parse(storedUser) : {},
    user: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("user")) || {} : {},
    // user: JSON.parse(localStorage.getItem("user")) || {},
    
    slis:{},
    sli: {},
    cps:{},
    stats:{},
    dstats: {},
    profile: {},
    ratingstats : {},
    ratings : {}

}

const userSlice = createSlice({
    name: "customer",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(actions.createUserPanel.pending, (state)=>{
            state.loading =true
      })

      builder.addCase(actions.createUserPanel.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload
            state.message = "user panel creation successful"
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.error = ""
      })

      builder.addCase(actions.createUserPanel.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
      })

      builder.addCase(actions.loginUser.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.loginUser.fulfilled, (state, action)=>{
              state.loading = false
              state.user = action.payload
              localStorage.setItem("user", JSON.stringify(action.payload))
              state.message = "login successful"
              state.error = ""
      })
      builder.addCase(actions.loginUser.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.logout.pending, (state)=>{
          state.loading = true;
        })
  
      builder.addCase(actions.logout.fulfilled, (state, action)=>{
              state.loading = false
              state.user = action.payload
              localStorage.setItem("user", "")
              state.message = "logout successful"
              state.error = ""
      })
      builder.addCase(actions.logout.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })
      

      builder.addCase(actions.getSLIs.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getSLIs.fulfilled, (state, action)=>{
              state.loading = false
              state.slis = action.payload
              state.message = "slis fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getSLIs.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getSLI.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getSLI.fulfilled, (state, action)=>{
              state.loading = false
              state.sli = action.payload
              state.message = "sli fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getSLI.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getCPS.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getCPS.fulfilled, (state, action)=>{
              state.loading = false
              state.cps = action.payload
              state.message = "CPS fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getCPS.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getProfileStats.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getProfileStats.fulfilled, (state, action)=>{
              state.loading = false
              state.stats = action.payload
              state.message = "Stats fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getProfileStats.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getDashboardStats.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getDashboardStats.fulfilled, (state, action)=>{
              state.loading = false
              state.dstats = action.payload
              state.message = "Stats fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getDashboardStats.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })
      builder.addCase(actions.getPanelistProfile.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getPanelistProfile.fulfilled, (state, action)=>{
              state.loading = false
              state.profile = action.payload
              state.message = "Profile fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getPanelistProfile.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getSLIRatingStats.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getSLIRatingStats.fulfilled, (state, action)=>{
              state.loading = false
              state.ratingstats = action.payload
              state.message = "SLI rating stats fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getSLIRatingStats.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.getSLIRatings.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.getSLIRatings.fulfilled, (state, action)=>{
              state.loading = false
              state.ratings = action.payload
              state.message = "SLI ratings  fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.getSLIRatings.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })

      builder.addCase(actions.createRatings.pending, (state)=>{
        state.loading = true;
      })

      builder.addCase(actions.createRatings.fulfilled, (state, action)=>{
              state.loading = false
              state.message = "SLI rated fetched successfully"
              state.error = ""
      })
      builder.addCase(actions.createRatings.rejected, (state, action)=>{
              state.loading=false;
              state.error = action.error.message.split(" ")[action.error.message.split(" ").length-1]
              state.message = action.error.message
      })


    }
})

export default userSlice.reducer;