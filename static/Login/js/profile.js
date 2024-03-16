// // // edit profile script
// //         document.addEventListener("DOMContentLoaded", function () {
// //             const editProfileLink = document.getElementById("edit-profile-link");
// //             const contentContainer = document.querySelector(".profile-content");

// //             editProfileLink.addEventListener("click", function (event) {
// //                 event.preventDefault();

// //                 // Fetch the content from the server (you might need to adjust the URL)
// //                 fetch("{% url 'edit_profile' %}")
// //                     .then(response => response.text())
// //                     .then(data => {
// //                         // Replace the content in the profile content area with the loaded data
// //                         contentContainer.innerHTML = data;
// //                     });
// //             });

// //             const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

// //             allSideMenu.forEach(item => {
// //                 const li = item.parentElement;

// //                 item.addEventListener('click', function () {
// //                     allSideMenu.forEach(i => {
// //                         i.parentElement.classList.remove('active');
// //                     })
// //                     li.classList.add('active');

// //                     // Hide the edit profile form when clicking on other icons
// //                     contentContainer.innerHTML = "";
// //                 })
// //             });
// //         });

// // //   delete post script
// //     function confirmDelete(postId) {
// //         const isConfirmed = confirm('Are you sure you want to delete this post?');
// //         if (isConfirmed) {
// //             const csrfToken = getCookie('csrftoken');

// //             // Send a DELETE request to your server to delete the post
// //             fetch(`/app1/postAPI/${postId}/`, {
// //                 method: 'DELETE',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'X-CSRFToken': csrfToken,
// //                 },
// //             })
// //             .then(response => {
// //                 if (response.status === 204) {
// //                     // Remove the deleted post from the UI
// //                     const postItem = document.getElementById(`options-menu-${postId}`).closest('.post-item');
// //                     postItem.remove();
// //                     alert('Post deleted successfully');
// //                 } else {
// //                     alert('Failed to delete the post.');
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //                 alert('Failed to delete the post.');
// //             });
// //         }
// //     }

// //     // Function to get CSRF token from cookies
// //     function getCookie(name) {
// //         const value = `; ${document.cookie}`;
// //         const parts = value.split(`; ${name}=`);
// //         if (parts.length === 2) return parts.pop().split(';').shift();
// //     }

// // // refresh profile update script

// //  function confirmUpdateProfile() {
// //      const csrfToken = getCookie('csrftoken');
// //      const formData = new FormData($('#edit-profile-form')[0]);

// //      $.ajax({
// //          type: 'POST',
// //          url: '/app1/profile/',
// //          data: formData,
// //          processData: false,
// //          contentType: false,
// //          headers: {
// //              'X-CSRFToken': csrfToken,
// //          },
// //          success: function (response) {
// //              alert('Profile updated successfully! Please refresh the page to see the updated profile.');
// //              location.reload();
// //          },
// //          error: function (error) {
// //              console.error('Error updating profile:', error);
// //              alert('Failed to update the profile.');
// //          }
// //      });
// //  }

// //  // main profile image script

// //  document.addEventListener("DOMContentLoaded", function () {
// //      const addedSection = document.getElementById("added");

// //      // Initially visible
// //      addedSection.style.display = "block";

// //      const hideAddedSection = function () {
// //          addedSection.style.display = "none";
// //      };

// //      const showAddedSection = function () {
// //          addedSection.style.display = "block";
// //      };

// //      // Attach event listeners to other icons
// //      const otherLinks = document.querySelectorAll("#edit-profile-link, #my-posts-link, #chats-link, .logout");
// //      otherLinks.forEach(link => {
// //          link.addEventListener("click", function (event) {
// //              event.preventDefault();
// //              // Hide the added section when other icons are clicked
// //              hideAddedSection();
// //          });
// //      });

// //  });

// // //  show posts when clicked function script

// //         document.addEventListener("DOMContentLoaded", function () {
// //             const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
// //             const myPostsContainer = document.getElementById("my-posts-container");

// //             allSideMenu.forEach(item => {
// //                 const li = item.parentElement;

// //                 item.addEventListener('click', function () {
// //                     allSideMenu.forEach(i => {
// //                         i.parentElement.classList.remove('active');
// //                     })
// //                     li.classList.add('active');

// //                     // Toggle the visibility of My Posts based on the clicked icon
// //                     myPostsContainer.classList.toggle('show', item.id === "my-posts-link");

// //                     // Hide the content container for other icons
// //                     const contentContainer = document.querySelector(".content-container");
// //                     contentContainer.style.display = item.id === "my-posts-link" ? "block" : "none";
// //                 })
// //             });
// //         });

// // //  function for displaying chat rooms clciked

// //             document.addEventListener("DOMContentLoaded", function () {
// //                 const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
// //                 const chatRoomsContainer = document.getElementById("chat-rooms-container");
// //                // const joinedChannelsContainer = document.getElementBhyId("joined-channels-container");

// //                 // Hide chat rooms and joined channels initially
// //                 chatRoomsContainer.style.display = 'none';
// //                // joinedChannelsContainer.style.display = 'none';

// //                 allSideMenu.forEach(item => {
// //                     const li = item.parentElement;

// //                     item.addEventListener('click', function () {
// //                         allSideMenu.forEach(i => {
// //                             i.parentElement.classList.remove('active');
// //                         })
// //                         li.classList.add('active');

// //                         // Toggle the visibility of Chats and Joined Channels based on the clicked icon
// //                         chatRoomsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// //                       //  joinedChannelsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// //                     })
// //                 });
// //             });

// //     //remove picture script

// //     document.addEventListener("DOMContentLoaded", function () {
// //         // ... your existing code ...

// //         const removePictureButton = document.getElementById("remove-picture");
// //         removePictureButton.addEventListener("click", function () {
// //             // Set the value of the hidden input field to 'true' when the "Remove" button is clicked
// //             document.getElementById('remove-picture-input').value = 'true';

// //             // Trigger form submission
// //             document.getElementById('edit-profile-form').submit();
// //         });
// //     });

// //     // clciking on different icons functuion

// //     document.addEventListener("DOMContentLoaded", function () {
// //         const editProfileLink = document.getElementById("edit-profile-link");
// //         const formContainer = document.getElementById("form-container");
// //         const editProfileForm = document.getElementById("edit-profile-form");

// //         const profilePicture = document.getElementById("profile-picture");

// //         formContainer.style.display = "none";
// //         let isFormDirty = false;

// //         editProfileLink.addEventListener("click", function (event) {
// //             event.preventDefault();
// //             formContainer.style.display = "block";
// //             // successMessage.style.display = "none";
// //         });

// //         const otherLinks = document.querySelectorAll("#my-posts-link, #chats-link, .logout");
// //         otherLinks.forEach(link => {
// //             link.addEventListener("click", function (event) {
// //                 event.preventDefault();
// //                 if (isFormDirty) {
// //                     const userResponse = confirm("You have unsaved changes. Do you really want to leave?");
// //                     if (!userResponse) {
// //                         return;
// //                     }
// //                 }
// //                 formContainer.style.display = "none";
// //                 successMessage.style.display = "none";
// //             });
// //         });

// //     });

// // //chat entered rooms script

// // //     document.addEventListener("DOMContentLoaded", function () {
// // //         const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
// // //         const chatRoomsContainer = document.getElementById("messages-container");
// // //        // const joinedChannelsContainer = document.getElementBhyId("joined-channels-container");

// // //         // Hide chat rooms and joined channels initially
// // //         chatRoomsContainer.style.display = 'none';
// // //        // joinedChannelsContainer.style.display = 'none';

// // //         allSideMenu.forEach(item => {
// // //             const li = item.parentElement;

// // //             item.addEventListener('click', function () {
// // //                 allSideMenu.forEach(i => {
// // //                     i.parentElement.classList.remove('active');
// // //                 })
// // //                 li.classList.add('active');

// // //                 // Toggle the visibility of Chats and Joined Channels based on the clicked icon
// // //                 chatRoomsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// // //               //  joinedChannelsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// // //             })
// // //         });
// // //     });

// // // function fetchMessages() {
// // //     fetch('/app1/getAllMessages/')  // Replace with the actual URL of your view
// // //         .then(response => response.json())
// // //         .then(data => {
// // //             // Extract messages from the response
// // //             const messages = data.messages;

// // //             // Extract unique combinations of user and room using a Set
// // //             const uniqueUserRoomSet = new Set(messages.map(message => `${message.user}-${message.room_name}`));
// // //             const uniqueUserRooms = Array.from(uniqueUserRoomSet);

// // //             // Display messages in the HTML page
// // //             const messagesContainer = document.getElementById('messages-container');
// // //             messagesContainer.innerHTML = '';  // Clear previous messages

// // //             uniqueUserRooms.forEach(userRoom => {
// // //                 const [user, room_name] = userRoom.split('-');
// // //                 const roomLink = document.createElement('a');
// // //                 roomLink.href = `/app1/${room_name}/`; // Replace with the actual URL pattern
// // //                 console.log(roomLink.href);
// // //                 roomLink.innerHTML = `<span class="text">${user} - Room - ${room_name}</span>`;
// // //                 roomLink.addEventListener('click', function (event) {
// // //                     event.preventDefault();  // Prevent the default link behavior
// // //                     window.location.href = roomLink.href;  // Navigate to the room URL
// // //                 });
// // //                 const messageElement = document.createElement('li');
// // //                 messageElement.appendChild(roomLink);
// // //                 messagesContainer.appendChild(messageElement);
// // //             });
// // //         })
// // //         .catch(error => console.error('Error:', error));

// // // }

// // //logout functionality

// //         // window.onload = function () {
// //         //     document.getElementById('logoutButton').addEventListener('click', function (event) {
// //         //         event.preventDefault(); // Prevent the default form submission

// //         //         var logoutModal = document.getElementById('logoutModal');
// //         //         logoutModal.style.display = 'flex';

// //         //         document.getElementById('confirmLogout').addEventListener('click', function () {
// //         //             // Redirect to the logout URL only if the user clicks "Yes"
// //         //             window.location.href = "{% url 'logout' %}";
// //         //         });

// //         //         document.getElementById('cancelLogout').addEventListener('click', function () {
// //         //             logoutModal.style.display = 'none';
// //         //         });
// //         //     });
// //         // };

// // // logout and entered rooms combined code

// //         document.addEventListener("DOMContentLoaded", function () {
// //             document.getElementById('logoutButton').addEventListener('click', function () {
// //                 var logoutModal = document.getElementById('logoutModal');
// //                 logoutModal.style.display = 'flex';

// //                 const logoutUrl = document.getElementById('logoutButton').getAttribute('data-logout-url');

// //                 document.getElementById('confirmLogout').addEventListener('click', function () {
// //                     // Make an AJAX request to handle the logout
// //                     const csrfToken = getCookie('csrftoken'); // Ensure you have a function getCookie defined

// //                     $.ajax({
// //                         type: 'POST',
// //                         url: logoutUrl,
// //                         data: { csrfmiddlewaretoken: csrfToken },
// //                         success: function (response) {
// //                             // Redirect to the home page or handle the response as needed
// //                             window.location.href = '/';
// //                         },
// //                         error: function (error) {
// //                             console.error('Error during logout:', error);
// //                             // Handle the error as needed
// //                         }
// //                     });
// //                 });

// //                 document.getElementById('cancelLogout').addEventListener('click', function () {
// //                     logoutModal.style.display = 'none';
// //                 });
// //             });

// //             function fetchMessages() {
// //                 fetch('/app1/getAllMessages/')  // Replace with the actual URL of your view
// //                     .then(response => response.json())
// //                     .then(data => {
// //                         // Extract messages from the response
// //                         const messages = data.messages;

// //                         // Extract unique combinations of user and room using a Set
// //                         const uniqueUserRoomSet = new Set(messages.map(message => `${message.user}-${message.room_name}`));
// //                         const uniqueUserRooms = Array.from(uniqueUserRoomSet);

// //                         // Display messages in the HTML page
// //                         const messagesContainer = document.getElementById('messages-container');
// //                         messagesContainer.innerHTML = '';  // Clear previous messages

// //                         uniqueUserRooms.forEach(userRoom => {
// //                             const [user, room_name] = userRoom.split('-');
// //                             const roomLink = document.createElement('a');
// //                             roomLink.href = `/app1/${room_name}/`; // Replace with the actual URL pattern
// //                             console.log(roomLink.href);
// //                             roomLink.innerHTML = `<span class="text">${user} - Room - ${room_name}</span>`;
// //                             roomLink.addEventListener('click', function (event) {
// //                                 event.preventDefault();  // Prevent the default link behavior
// //                                 window.location.href = roomLink.href;  // Navigate to the room URL
// //                             });
// //                             const messageElement = document.createElement('li');
// //                             messageElement.appendChild(roomLink);
// //                             messagesContainer.appendChild(messageElement);
// //                         });
// //                     })
// //                     .catch(error => console.error('Error:', error));
// //             }

// //             // Run fetchMessages on page load
// //             fetchMessages();
// //         });

// //     document.addEventListener("DOMContentLoaded", function () {
// //         const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
// //         const chatRoomsContainer = document.getElementById("messages-container");
// //        // const joinedChannelsContainer = document.getElementBhyId("joined-channels-container");

// //         // Hide chat rooms and joined channels initially
// //         chatRoomsContainer.style.display = 'none';
// //        // joinedChannelsContainer.style.display = 'none';

// //         allSideMenu.forEach(item => {
// //             const li = item.parentElement;

// //             item.addEventListener('click', function () {
// //                 allSideMenu.forEach(i => {
// //                     i.parentElement.classList.remove('active');
// //                 })
// //                 li.classList.add('active');

// //                 // Toggle the visibility of Chats and Joined Channels based on the clicked icon
// //                 chatRoomsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// //               //  joinedChannelsContainer.style.display = item.id === "chats-link" ? "block" : "none";
// //             })
// //         });
// //     });

// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("logoutButton")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       var logoutModal = document.getElementById("logoutModal");
//       logoutModal.style.display = "flex";

//       const logoutUrl = document
//         .getElementById("logoutButton")
//         .getAttribute("href");

//       document
//         .getElementById("confirmLogout")
//         .addEventListener("click", function () {
//           // Make an AJAX request to handle the logout
//           const csrfToken = getCookie("csrftoken"); // Ensure you have a function getCookie defined

//           $.ajax({
//             type: "POST",
//             url: logoutUrl,
//             data: { csrfmiddlewaretoken: csrfToken },
//             success: function (response) {
//               // Redirect to the home page or handle the response as needed
//               window.location.href = "/";
//             },
//             error: function (error) {
//               console.error("Error during logout:", error);
//               // Handle the error as needed
//             },
//           });
//         });

//       document
//         .getElementById("cancelLogout")
//         .addEventListener("click", function () {
//           logoutModal.style.display = "none";
//         });
//     });

//   function fetchMessages() {
//     fetch("/app1/getAllMessages/") // Replace with the actual URL of your view
//       .then((response) => response.json())
//       .then((data) => {
//         // Extract messages from the response
//         const messages = data.messages;

//         // Extract unique combinations of user and room using a Set
//         const uniqueUserRoomSet = new Set(
//           messages.map((message) => `${message.user}-${message.room_name}`)
//         );
//         const uniqueUserRooms = Array.from(uniqueUserRoomSet);

//         // Display messages in the HTML page
//         const messagesContainer = document.getElementById("messages-container");
//         messagesContainer.innerHTML = ""; // Clear previous messages

//         uniqueUserRooms.forEach((userRoom) => {
//           const [user, room_name] = userRoom.split("-");
//           const roomLink = document.createElement("a");
//           roomLink.href = `/app1/${room_name}/`; // Replace with the actual URL pattern
//           console.log(roomLink.href);
//           roomLink.innerHTML = `<span class="text">${user} - Joined Room - ${room_name}</span>`;
//           roomLink.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent the default link behavior
//             window.location.href = roomLink.href; // Navigate to the room URL
//           });
//           const messageElement = document.createElement("li");
//           messageElement.appendChild(roomLink);
//           messagesContainer.appendChild(messageElement);
//         });
//       })
//       .catch((error) => console.error("Error:", error));
//   }

//   // Run fetchMessages on page load
//   fetchMessages();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
//   const chatRoomsContainer = document.getElementById("messages-container");
//   // const joinedChannelsContainer = document.getElementBhyId("joined-channels-container");

//   // Hide chat rooms and joined channels initially
//   chatRoomsContainer.style.display = "none";
//   // joinedChannelsContainer.style.display = 'none';

//   allSideMenu.forEach((item) => {
//     const li = item.parentElement;

//     item.addEventListener("click", function () {
//       allSideMenu.forEach((i) => {
//         i.parentElement.classList.remove("active");
//       });
//       li.classList.add("active");

//       // Toggle the visibility of Chats and Joined Channels based on the clicked icon
//       chatRoomsContainer.style.display =
//         item.id === "chats-link" ? "block" : "none";
//       //  joinedChannelsContainer.style.display = item.id === "chats-link" ? "block" : "none";
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const editProfileLink = document.getElementById("edit-profile-link");
//   const formContainer = document.getElementById("form-container");
//   const editProfileForm = document.getElementById("edit-profile-form");

//   const profilePicture = document.getElementById("profile-picture");

//   formContainer.style.display = "none";
//   let isFormDirty = false;

//   editProfileLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     formContainer.style.display = "block";
//     // successMessage.style.display = "none";
//   });

//   const otherLinks = document.querySelectorAll(
//     "#my-posts-link, #chats-link, .logout"
//   );
//   otherLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       if (isFormDirty) {
//         const userResponse = confirm(
//           "You have unsaved changes. Do you really want to leave?"
//         );
//         if (!userResponse) {
//           return;
//         }
//       }
//       formContainer.style.display = "none";
//       successMessage.style.display = "none";
//     });
//   });

//   editProfileForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const formData = new FormData(editProfileForm);

//     fetch(editProfileForm.action, {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           successMessage.style.display = "block";
//           editProfileForm.reset();
//           formContainer.style.display = "block";
//           isFormDirty = false;

//           // Update the profile data on the page dynamically
//           updateProfileData(data);

//           if (data.profile_picture_url) {
//             profilePicture.src = data.profile_picture_url;
//           }
//         } else {
//           console.error("Profile update failed");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   });

//   // Detect form changes to prompt user before leaving the page
//   editProfileForm.addEventListener("input", function () {
//     isFormDirty = true;
//   });

//   // Handle cancel button click
//   // Handle cancel button click
// });

// const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

// allSideMenu.forEach((item) => {
//   const li = item.parentElement;

//   item.addEventListener("click", function () {
//     allSideMenu.forEach((i) => {
//       i.parentElement.classList.remove("active");
//     });
//     li.classList.add("active");

//     contentContainer.innerHTML = "";
//   });
// });

// // Your existing script...
// const menuBar = document.querySelector("#content nav .bx.bx-menu");
// const sidebar = document.getElementById("sidebar");

// menuBar.addEventListener("click", function () {
//   sidebar.classList.toggle("hide");
// });

// const searchButton = document.querySelector(
//   "#content nav form .form-input button"
// );
// const searchButtonIcon = document.querySelector(
//   "#content nav form .form-input button .bx"
// );
// const searchForm = document.querySelector("#content nav form");

// searchButton.addEventListener("click", function (e) {
//   if (window.innerWidth < 576) {
//     e.preventDefault();
//     searchForm.classList.toggle("show");
//     if (searchForm.classList.contains("show")) {
//       searchButtonIcon.classList.replace("bx-search", "bx-x");
//     } else {
//       searchButtonIcon.classList.replace("bx-x", "bx-search");
//     }
//   }
// });

// if (window.innerWidth < 768) {
//   sidebar.classList.add("hide");
// } else if (window.innerWidth > 576) {
//   searchButtonIcon.classList.replace("bx-x", "bx-search");
//   searchForm.classList.remove("show");
// }

// window.addEventListener("resize", function () {
//   if (this.innerWidth > 576) {
//     searchButtonIcon.classList.replace("bx-x", "bx-search");
//     searchForm.classList.remove("show");
//   }
// });

// const switchMode = document.getElementById("switch-mode");

// switchMode.addEventListener("change", function () {
//   if (this.checked) {
//     document.body.classList.add("dark");
//   } else {
//     document.body.classList.remove("dark");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
//   const chatRoomsContainer = document.getElementById("chat-rooms-container");
//   // const joinedChannelsContainer = document.getElementBhyId("joined-channels-container");

//   // Hide chat rooms and joined channels initially
//   chatRoomsContainer.style.display = "none";
//   // joinedChannelsContainer.style.display = 'none';

//   allSideMenu.forEach((item) => {
//     const li = item.parentElement;

//     item.addEventListener("click", function () {
//       allSideMenu.forEach((i) => {
//         i.parentElement.classList.remove("active");
//       });
//       li.classList.add("active");

//       // Toggle the visibility of Chats and Joined Channels based on the clicked icon
//       chatRoomsContainer.style.display =
//         item.id === "chats-link" ? "block" : "none";
//       //  joinedChannelsContainer.style.display = item.id === "chats-link" ? "block" : "none";
//     });
//   });
// });

// function loadChats(roomId) {
//   $.ajax({
//     type: "GET",
//     url: `/app1/getMessages/${roomId}/`,
//     dataType: "json",
//     success: function (response) {
//       console.log("Successfully fetched chat messages:", response);
//       displayChatMessages(response.messages);
//     },
//     error: function (error) {
//       console.error("Error fetching chat messages:", error);
//     },
//   });
// }

// function displayChatMessages(messages) {
//   console.log("Displaying Chat Messages:", messages);
//   // Update your DOM here with the received messages
//   // For simplicity, this example just displays an alert
//   alert("Chat Messages:\n" + JSON.stringify(messages));
// }

// function enterChatRoom(postId) {
//   $.ajax({
//     type: "GET",
//     url: `/app1/getRoomId/${postId}/`,
//     dataType: "json",
//     success: function (response) {
//       console.log("Successfully fetched roomId:", response.roomId);
//       loadChats(response.roomId);
//     },
//     error: function (error) {
//       console.error("Error fetching roomId:", error);
//     },
//   });
// }

// $(document).ready(function () {
//   $("#chatsList a").each(function () {
//     var postId = $(this).data("post-id");
//     enterChatRoom(postId);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");
//   const myPostsContainer = document.getElementById("my-posts-container");

//   allSideMenu.forEach((item) => {
//     const li = item.parentElement;

//     item.addEventListener("click", function () {
//       allSideMenu.forEach((i) => {
//         i.parentElement.classList.remove("active");
//       });
//       li.classList.add("active");

//       // Toggle the visibility of My Posts based on the clicked icon
//       myPostsContainer.classList.toggle("show", item.id === "my-posts-link");

//       // Hide the content container for other icons
//       const contentContainer = document.querySelector(".content-container");
//       contentContainer.style.display =
//         item.id === "my-posts-link" ? "block" : "none";
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const addedSection = document.getElementById("added");

//   // Initially visible
//   addedSection.style.display = "block";

//   const hideAddedSection = function () {
//     addedSection.style.display = "none";
//   };

//   const showAddedSection = function () {
//     addedSection.style.display = "block";
//   };

//   // Attach event listeners to other icons
//   const otherLinks = document.querySelectorAll(
//     "#edit-profile-link, #my-posts-link, #chats-link, .logout"
//   );
//   otherLinks.forEach((link) => {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       // Hide the added section when other icons are clicked
//       hideAddedSection();
//     });
//   });

//   // You can call showAddedSection() when you want to show the section
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const editProfileLink = document.getElementById("edit-profile-link");
//   const contentContainer = document.querySelector(".profile-content");

//   editProfileLink.addEventListener("click", function (event) {
//     event.preventDefault();

//     // Fetch the content from the server (you might need to adjust the URL)
//     fetch("{% url 'edit_profile' %}")
//       .then((response) => response.text())
//       .then((data) => {
//         // Replace the content in the profile content area with the loaded data
//         contentContainer.innerHTML = data;
//       });
//   });

//   const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

//   allSideMenu.forEach((item) => {
//     const li = item.parentElement;

//     item.addEventListener("click", function () {
//       allSideMenu.forEach((i) => {
//         i.parentElement.classList.remove("active");
//       });
//       li.classList.add("active");

//       // Hide the edit profile form when clicking on other icons
//       contentContainer.innerHTML = "";
//     });
//   });
// });
// // Your existing script...

// function confirmDelete(postId) {
//   const isConfirmed = confirm("Are you sure you want to delete this post?");
//   if (isConfirmed) {
//     const csrfToken = getCookie("csrftoken");

//     // Send a DELETE request to your server to delete the post
//     fetch(`/app1/postAPI/${postId}/`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRFToken": csrfToken,
//       },
//     })
//       .then((response) => {
//         if (response.status === 204) {
//           // Remove the deleted post from the UI
//           const postItem = document
//             .getElementById(`options-menu-${postId}`)
//             .closest(".post-item");
//           postItem.remove();
//           alert("Post deleted successfully");
//         } else {
//           alert("Failed to delete the post.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Failed to delete the post.");
//       });
//   }
// }

// // Function to get CSRF token from cookies
// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

// function confirmUpdateProfile() {
//   const csrfToken = getCookie("csrftoken");
//   const formData = new FormData($("#edit-profile-form")[0]);

//   $.ajax({
//     type: "POST",
//     url: "/app1/profile/",
//     data: formData,
//     processData: false,
//     contentType: false,
//     headers: {
//       "X-CSRFToken": csrfToken,
//     },
//     success: function (response) {
//       alert("Profile updated successfully!");

//       // Move the reload inside the success callback
//       location.reload();
//     },
//     error: function (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update the profile.");
//     },
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var fileInput = document.getElementById("file-input1");
//   var profilePicture = document.getElementById("profile-picture");
//   var updateButton = document.querySelector(".btn-primary");

//   fileInput.addEventListener("change", function () {
//     if (fileInput.files.length > 0) {
//       var reader = new FileReader();
//       reader.onload = function (event) {
//         profilePicture.src = event.target.result;
//       };
//       reader.readAsDataURL(fileInput.files[0]);
//       updateButton.disabled = false;
//     } else {
//       // If no file is selected, revert to the default profile picture or hide the image
//       //   {% if user.profile_picture %}
//       if (userProfilePictureUrl) {
//         profilePicture.src = userProfilePictureUrl;
//       } else {
//         profilePicture.style.display = "none";
//       }

//       updateButton.disabled = true; // Disable the button if no file is selected
//     }
//   });
//   updateButton.addEventListener("click", function (event) {
//     if (fileInput.files.length === 0) {
//       event.preventDefault(); // Prevent form submission if no file is selected
//       alert("Please select an image to update.");
//     } else {
//       var form = document.getElementById("edit-profile-form");
//       var formData = new FormData(form);

//       fetch(form.action, {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => {
//           if (response.ok) {
//             alert("Profile updated successfully!");
//             location.reload();
//           } else {
//             alert("Error updating profile.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("An error occurred while updating profile.");
//         });
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const removePictureButton = document.getElementById("remove-picture");
//   removePictureButton.addEventListener("click", function () {
//     console.log("Button clicked!");
//     // Ask for confirmation
//     const confirmed = window.confirm(
//       "Are you sure you want to remove the picture?"
//     );
//     if (confirmed) {
//       // If user confirms, set the value of the remove-picture-input to 'true'
//       document.getElementById("remove-picture-input").value = "true";
//       // Submit the form
//       document.getElementById("edit-profile-form").submit();
//     }
//   });
// });
