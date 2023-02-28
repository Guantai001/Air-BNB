require_relative './config/environment'



use HostsController
use ImagesController
use ReviewsController
use UsersController
use RoomsController


run ApplicationController
