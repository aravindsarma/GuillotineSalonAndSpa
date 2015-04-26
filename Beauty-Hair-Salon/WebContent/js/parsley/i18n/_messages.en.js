/**
* /!\ This file is just an example template to create/update your own language file /!\
*/

window.ParsleyConfig = window.ParsleyConfig || {};

(function ($) {
  window.ParsleyConfig = $.extend( true, {}, window.ParsleyConfig, {
    messages: {
      // parsley //////////////////////////////////////
        defaultMessage: "<span class='glyphicon glyphicon-remove'></span> This value seems to be invalid."
        , type: {
            email:      "<span class='glyphicon glyphicon-remove'></span> This value should be a valid email."
          , url:        "<span class='glyphicon glyphicon-remove'></span> This value should be a valid url."
          , urlstrict:  "<span class='glyphicon glyphicon-remove'></span> This value should be a valid url."
          , number:     "<span class='glyphicon glyphicon-remove'></span> This value should be a valid number."
          , digits:     "<span class='glyphicon glyphicon-remove'></span> This value should be digits."
          , dateIso:    "<span class='glyphicon glyphicon-remove'></span> This value should be a valid date (YYYY-MM-DD)."
          , alphanum:   "<span class='glyphicon glyphicon-remove'></span> This value should be alphanumeric."
          , phone:      "<span class='glyphicon glyphicon-remove'></span> This value should be a valid phone number."
        }
      , notnull:        "<span class='glyphicon glyphicon-remove'></span> This value should not be null."
      , notblank:       "<span class='glyphicon glyphicon-remove'></span> This value should not be blank."
      , required:       "<span class='glyphicon glyphicon-remove'></span> This value is required."
      , regexp:         "<span class='glyphicon glyphicon-remove'></span> This value seems to be invalid."
      , min:            "<span class='glyphicon glyphicon-remove'></span> This value should be greater than or equal to %s."
      , max:            "<span class='glyphicon glyphicon-remove'></span> This value should be lower than or equal to %s."
      , range:          "<span class='glyphicon glyphicon-remove'></span> This value should be between %s and %s."
      , minlength:      "<span class='glyphicon glyphicon-remove'></span> This value is too short. It should have %s characters or more."
      , maxlength:      "<span class='glyphicon glyphicon-remove'></span> This value is too long. It should have %s characters or less."
      , rangelength:    "<span class='glyphicon glyphicon-remove'></span> This value length is invalid. It should be between %s and %s characters long."
      , mincheck:       "You must select at least %s choices."
      , maxcheck:       "You must select %s choices or less."
      , rangecheck:     "You must select between %s and %s choices."
      , equalto:        "<span class='glyphicon glyphicon-remove'></span> This value should be the same."

      // parsley.extend ///////////////////////////////
      , minwords:       "<span class='glyphicon glyphicon-remove'></span> This value should have %s words at least."
      , maxwords:       "<span class='glyphicon glyphicon-remove'></span> This value should have %s words maximum."
      , rangewords:     "<span class='glyphicon glyphicon-remove'></span> This value should have between %s and %s words."
      , greaterthan:    "<span class='glyphicon glyphicon-remove'></span> This value should be greater than %s."
      , lessthan:       "<span class='glyphicon glyphicon-remove'></span> This value should be less than %s."
      , beforedate:     "<span class='glyphicon glyphicon-remove'></span> This date should be before %s."
      , afterdate:      "<span class='glyphicon glyphicon-remove'></span> This date should be after %s."
      , americandate:	"<span class='glyphicon glyphicon-remove'></span> This value should be a valid date (MM/DD/YYYY)."
    }
  });
}(window.jQuery || window.Zepto));