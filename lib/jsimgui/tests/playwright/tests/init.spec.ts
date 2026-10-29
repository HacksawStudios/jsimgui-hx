import { expect, test } from "@playwright/test";

const backends = [
    { name: "WebGL", file: "webgl.html" },
    { name: "WebGL2", file: "webgl2.html" },
    { name: "WebGPU", file: "webgpu.html" },
] as const;

backends.forEach((backend) => {
    test(`Init ${backend.name}`, async ({ page }) => {
        await page.goto(`tests/playwright/tests/${backend.file}`);

        expect(
            await page.waitForEvent("console", {
                predicate: (msg) => msg.text().includes("render complete"),
            }),
        ).toBeTruthy();
    });
});

test("Init ImPlot extension", async ({ page }) => {
    const errors: string[] = [];

    page.on("pageerror", (error) => {
        errors.push(error.message);
    });
    page.on("console", (msg) => {
        if (msg.type() === "error") {
            errors.push(msg.text());
        }
    });

    await page.goto("tests/playwright/tests/extensions.html");

    expect(
        await page.waitForEvent("console", {
            predicate: (msg) => msg.text().includes("implot render complete"),
        }),
    ).toBeTruthy();
    expect(errors).toEqual([]);
});
