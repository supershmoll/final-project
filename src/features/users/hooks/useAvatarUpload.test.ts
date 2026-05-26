import { act, renderHook } from "@testing-library/react";
import {
  createElement,
  type ChangeEvent,
  type DragEvent,
  type ReactNode,
} from "react";
import { PreferencesProvider } from "@/lib/preferences/PreferencesProvider";
import { useAvatarUpload } from "./useAvatarUpload";

jest.mock("../utils/avatarFile", () => ({
  readAvatarFile: jest.fn(),
  validateAvatarFile: jest.fn(),
}));

const { readAvatarFile, validateAvatarFile } = jest.requireMock(
  "../utils/avatarFile",
);

function wrapper({ children }: { children: ReactNode }) {
  return createElement(PreferencesProvider, null, children);
}

describe("useAvatarUpload", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    validateAvatarFile.mockReturnValue(null);
  });

  it("ignores file dialog when editing is disabled", () => {
    const { result } = renderHook(
      () => useAvatarUpload({ canEdit: false, onSelected: jest.fn() }),
      { wrapper },
    );

    act(() => result.current.openFileDialog());
    expect(result.current.uploadError).toBeNull();
  });

  it("sets validation error for invalid files", () => {
    validateAvatarFile.mockReturnValue("profile.avatar.typeError");
    const { result } = renderHook(
      () => useAvatarUpload({ canEdit: true, onSelected: jest.fn() }),
      { wrapper },
    );
    const file = new File(["x"], "photo.webp", { type: "image/webp" });

    act(() =>
      result.current.handleFileChange({
        target: { files: [file], value: "photo.webp" },
      } as unknown as ChangeEvent<HTMLInputElement>),
    );

    expect(result.current.uploadError).toBe(
      "Please use a PNG, JPG, or GIF image.",
    );
    expect(readAvatarFile).not.toHaveBeenCalled();
  });

  it("reads valid dropped files and tracks drag state", () => {
    const onSelected = jest.fn();
    const { result } = renderHook(
      () => useAvatarUpload({ canEdit: true, onSelected }),
      { wrapper },
    );
    const file = new File(["x"], "photo.png", { type: "image/png" });

    act(() =>
      result.current.handleDragEnter({
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as DragEvent),
    );
    expect(result.current.isDragging).toBe(true);

    act(() =>
      result.current.handleDrop({
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        dataTransfer: { files: [file] },
      } as unknown as DragEvent),
    );

    expect(result.current.isDragging).toBe(false);
    expect(readAvatarFile).toHaveBeenCalledWith(file, onSelected);
  });
});
