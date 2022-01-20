import React, { Component } from "react";
import { Popover, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { X } from "react-feather";

class SuccessfulFormBanner extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    const { toggleModal } = this;
    const { history, currStudent, currCampus, entityToManipulate } = this.props;
    return (
      <div className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-20">
        <Popover className="relative">
          <Transition
            show={isOpen}
            enter="transition duration-1000 ease-out"
            enterFrom="transform translate-y-8 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-700 ease-out"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform translate-y-8 opacity-0"
          >
            <Popover.Panel className="absolute translate-y-5 -translate-x-1/2 left-1/2 bg-gold text-white w-2/3 max-w-2xl px-5 py-3 rounded-xl drop-shadow-2xl flex justify-between">
              <div className="w-full flex gap-2 items-center">
                <div className="text-xl">
                  🎉 Woohoo, that was a success!
                  <button
                    onClick={() => {
                      if (entityToManipulate === "student")
                        history.push(`/students/${currStudent.id}`);
                      else history.push(`/campuses/${currCampus.id}`);
                    }}
                    className="px-3 underline"
                  >
                    Check the {entityToManipulate} out
                  </button>
                </div>
              </div>

              <button className="bg-gold bg-opacity-50" onClick={toggleModal}>
                <X />
              </button>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = ({ currCampus, currStudent }) => {
  return { currCampus, currStudent };
};

export default connect(mapStateToProps)(SuccessfulFormBanner);
